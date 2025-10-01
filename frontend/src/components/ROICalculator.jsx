'use client';

import React, { useState, useMemo } from "react";
import { Snackbar, Alert } from "@mui/material";

export default function ROICalculator() {
  const DEFAULTS = {
    adSpend: 1000,
    revenueBDT: 500000,
    exchangeRate: 120,
    cogs: 2000,
    otherCosts: 500,
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
    const { adSpend, revenueBDT, exchangeRate, cogs, otherCosts } = inputs;

    // Convert Ad Spend & Costs to BDT
    const adSpendBDT = adSpend * exchangeRate;
    const cogsBDT = cogs * exchangeRate;
    const otherCostsBDT = otherCosts * exchangeRate;

    // Metrics
    const roas = adSpendBDT > 0 ? revenueBDT / adSpendBDT : 0;
    const totalCosts = adSpendBDT + cogsBDT + otherCostsBDT;
    const netProfit = revenueBDT - totalCosts;
    const profitMargin = revenueBDT > 0 ? (netProfit / revenueBDT) * 100 : 0;

    // Break-even ROAS = (Ad Spend + COGS + Other Costs) ÷ Ad Spend
    const breakEvenROAS = adSpendBDT > 0 ? totalCosts / adSpendBDT : 0;

    return {
      roas,
      netProfit,
      profitMargin,
      breakEvenROAS,
    };
  }, [inputs]);

  const formatCurrency = (v) =>
    `৳${v.toLocaleString("en-BD", { maximumFractionDigits: 0 })}`;
  const formatPercent = (v) => `${v.toFixed(1)}%`;
  const formatMultiplier = (v) => `${v.toFixed(2)}x`;

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbar({ ...snackbar, open: false });
  };

  const copyResults = async () => {
    const text = `ROI Analysis Results:
Ad Spend: $${inputs.adSpend}
Revenue: ${formatCurrency(inputs.revenueBDT)}
Exchange Rate: ${inputs.exchangeRate} BDT/USD
COGS: $${inputs.cogs}
Other Costs: $${inputs.otherCosts}

ROAS: ${formatMultiplier(results.roas)}
Net Profit: ${formatCurrency(results.netProfit)}
Profit Margin: ${formatPercent(results.profitMargin)}
Break-even ROAS: ${formatMultiplier(results.breakEvenROAS)}`;

    try {
      await navigator.clipboard.writeText(text);
      setSnackbar({ open: true, message: "Results copied to clipboard!", severity: "success" });
    } catch (err) {
      setSnackbar({ open: true, message: "Copy failed!", severity: "error" });
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 text-white">
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
          ROI Calculator
        </h2>
        <p className="text-sm text-gray-300 mb-6">
          Enter your Facebook Ads spend and revenue data to calculate ROI
          metrics.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
        {[
          { key: "adSpend", label: "Ad Spend ($)" },
          { key: "revenueBDT", label: "Revenue (৳ BDT)" },
          { key: "exchangeRate", label: "Exchange Rate", min: 1 },
          { key: "cogs", label: "Cost of Goods Sold ($)" },
          { key: "otherCosts", label: "Other Costs ($)" },
        ].map(({ key, label, min = 0 }) => (
          <label key={key} className="col-span-1 md:col-span-1 flex flex-col">
            <span className="text-xs text-gray-300 mb-1">{label}</span>
            <input
              type="number"
              min={min}
              value={inputs[key]}
              onChange={onChange(key)}
              className="input w-full px-3 focus:outline-none py-2 border rounded bg-gray-800 text-white border-gray-600"
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

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-gray-800 rounded">
          <div className="text-xs text-gray-400">ROAS</div>
          <div className="text-xl font-medium text-white">
            {formatMultiplier(results.roas)}
          </div>
        </div>

        <div className="p-4 bg-gray-800 rounded">
          <div className="text-xs text-gray-400">Net Profit</div>
          <div className="text-xl font-medium text-white">
            {formatCurrency(results.netProfit)}
          </div>
        </div>

        <div className="p-4 bg-gray-800 rounded">
          <div className="text-xs text-gray-400">Profit Margin</div>
          <div className="text-xl font-medium text-white">
            {formatPercent(results.profitMargin)}
          </div>
        </div>

        <div className="p-4 bg-gray-800 rounded">
          <div className="text-xs text-gray-400">Break-even ROAS</div>
          <div className="text-xl font-medium text-white">
            {formatMultiplier(results.breakEvenROAS)}
          </div>
        </div>
      </div>
    </div>
  );
}