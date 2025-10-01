'use client';

import React, { useState, useMemo } from "react";
import { Snackbar, Alert } from "@mui/material";

export default function FunnelCalculator() {
  const DEFAULTS = {
    impressions: 100000,
    clicks: 2000,
    atc: 200,
    ic: 80,
    purchases: 20,
  };

  const [inputs, setInputs] = useState(DEFAULTS);
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

  const onChange = (key) => (e) => {
    const val =
      e.target.value === "" ? "" : Math.max(0, Number(e.target.value));
    setInputs((s) => ({ ...s, [key]: val }));
  };

  const reset = () => setInputs(DEFAULTS);

  const results = useMemo(() => {
    const { impressions, clicks, atc, ic, purchases } = inputs;

    const safeDiv = (num, den) => (den <= 0 ? 0 : (num / den) * 100);

    const ctr = safeDiv(clicks, impressions);
    const atcRate = safeDiv(atc, clicks);
    const icRate = safeDiv(ic, atc);
    const purchaseRate = safeDiv(purchases, ic);

    const overallConversion = safeDiv(purchases, clicks);
    const impressionToPurchase = safeDiv(purchases, impressions);

    const dropOff = {
      ctr: null,
      atc: 100 - atcRate,
      ic: 100 - icRate,
      purchase: 100 - purchaseRate,
    };

    return {
      ctr,
      atcRate,
      icRate,
      purchaseRate,
      overallConversion,
      impressionToPurchase,
      dropOff,
    };
  }, [inputs]);

  const formatPercent = (v) => `${v.toFixed(2)}%`;

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbar({ ...snackbar, open: false });
  };

  const copyResults = async () => {
    const text = `Funnel Analysis Results:
Impressions: ${inputs.impressions}
Clicks: ${inputs.clicks}
Add to Carts: ${inputs.atc}
Initiate Checkouts: ${inputs.ic}
Purchases: ${inputs.purchases}

Overall Conversion: ${formatPercent(results.overallConversion)}
Impression to Purchase: ${formatPercent(results.impressionToPurchase)}
CTR: ${formatPercent(results.ctr)}
ATC Rate: ${formatPercent(results.atcRate)} (Drop-off ${results.dropOff.atc.toFixed(2)}%)
IC Rate: ${formatPercent(results.icRate)} (Drop-off ${results.dropOff.ic.toFixed(2)}%)
Purchase Rate: ${formatPercent(results.purchaseRate)} (Drop-off ${results.dropOff.purchase.toFixed(2)}%)`;

    try {
      await navigator.clipboard.writeText(text);
      setSnackbar({ open: true, message: "Results copied to clipboard!", severity: "success" });
    } catch (err) {
      setSnackbar({ open: true, message: "Copy failed!", severity: "error" });
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6  text-white">
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
      <div className={"flex flex-col items-center justify-center"}>
        <h2 className="text-2xl font-semibold mb-3 text-white">
          Funnel Calculator
        </h2>
        <p className="text-sm text-gray-300 mb-6">
          Enter your funnel metrics to analyze conversion rates and identify
          drop-off points.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
        {[
          { key: "impressions", label: "Impressions" },
          { key: "clicks", label: "Clicks" },
          { key: "atc", label: "Add to Carts (ATC)" },
          { key: "ic", label: "Initiate Checkouts (IC)" },
          { key: "purchases", label: "Purchases" },
        ].map(({ key, label }) => (
          <label key={key} className="col-span-1 md:col-span-1 flex flex-col">
            <span className="text-xs text-gray-300 mb-1">{label}</span>
            <input
              type="number"
              min="0"
              value={inputs[key]}
              onChange={onChange(key)}
              className="input w-full focus:outline-none px-3 py-2 border rounded bg-gray-800 text-white border-gray-600"
            />
          </label>
        ))}
      </div>

      <div className="flex items-center justify-center gap-3 mb-6">
        <button
          onClick={reset}
          className="px-4 py-2 bg-gray-700 text-white cursor-pointer rounded hover:bg-gray-600"
        >
          Reset
        </button>
        <button
          onClick={copyResults}
          className="px-4 py-2 bg-blue-600 cursor-pointer text-white rounded hover:opacity-95"
        >
          Copy Results
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr className="text-left text-sm text-gray-400">
              <th className="py-2">Funnel Stage</th>
              <th className="py-2">Rate</th>
              <th className="py-2">Drop-Off</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-200">
            <tr className="border-t border-gray-700">
              <td className="py-3">CTR</td>
              <td className="py-3">{formatPercent(results.ctr)}</td>
              <td className="py-3">—</td>
            </tr>

            <tr className="border-t border-gray-700">
              <td className="py-3">ATC Rate</td>
              <td className="py-3">{formatPercent(results.atcRate)}</td>
              <td className="py-3">{results.dropOff.atc.toFixed(2)}%</td>
            </tr>

            <tr className="border-t border-gray-700">
              <td className="py-3">IC Rate</td>
              <td className="py-3">{formatPercent(results.icRate)}</td>
              <td className="py-3">{results.dropOff.ic.toFixed(2)}%</td>
            </tr>

            <tr className="border-t border-gray-700">
              <td className="py-3">Purchase Rate</td>
              <td className="py-3">{formatPercent(results.purchaseRate)}</td>
              <td className="py-3">{results.dropOff.purchase.toFixed(2)}%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-gray-800 rounded">
          <div className="text-xs text-gray-400">Overall Conversion</div>
          <div className="text-xl font-medium text-white">
            {formatPercent(results.overallConversion)}
          </div>
        </div>

        <div className="p-4 bg-gray-800 rounded">
          <div className="text-xs text-gray-400">Impression to Purchase</div>
          <div className="text-xl font-medium text-white">
            {formatPercent(results.impressionToPurchase)}
          </div>
        </div>
      </div>
    </div>
  );
}