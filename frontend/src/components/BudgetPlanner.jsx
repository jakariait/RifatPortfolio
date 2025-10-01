'use client';

import React, { useState, useMemo } from "react";
import { Snackbar, Alert } from "@mui/material";

export default function BudgetPlanner() {
  const DEFAULTS = {
    cpo: 2, // Cost Per Order in USD
    orderGoal: 5000,
    conversionRate: 2.5, // %
    usdToBdt: 120,
  };

  const [inputs, setInputs] = useState(DEFAULTS);
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

  const onChange = (key) => (e) => {
    const val = e.target.value === "" ? "" : Math.max(0, Number(e.target.value));
    setInputs((s) => ({ ...s, [key]: val }));
  };

  const reset = () => setInputs(DEFAULTS);

  const results = useMemo(() => {
    const { cpo, orderGoal, conversionRate, usdToBdt } = inputs;

    // total spend in USD = CPO * Orders
    const totalSpendUSD = cpo * orderGoal;

    // convert to BDT
    const totalSpendBDT = totalSpendUSD * usdToBdt;

    // traffic needed = orders ÷ (conversion rate / 100)
    const trafficNeeded =
      conversionRate > 0 ? orderGoal / (conversionRate / 100) : 0;

    return {
      totalSpendUSD,
      totalSpendBDT,
      trafficNeeded,
    };
  }, [inputs]);

  const formatUSD = (v) =>
    `$${v.toLocaleString("en-US", { maximumFractionDigits: 0 })}`;
  const formatBDT = (v) =>
    `৳${v.toLocaleString("en-BD", { maximumFractionDigits: 0 })}`;
  const formatNumber = (v) =>
    v.toLocaleString("en-US", { maximumFractionDigits: 0 });

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbar({ ...snackbar, open: false });
  };

  const copyResults = async () => {
    const text = `Budget Planning Results:
Cost Per Order: $${inputs.cpo}
Order Goal: ${inputs.orderGoal}
Conversion Rate: ${inputs.conversionRate}%
Exchange Rate: ${inputs.usdToBdt} BDT/USD

Total Ad Spend (USD): ${formatUSD(results.totalSpendUSD)}
Total Ad Spend (BDT): ${formatBDT(results.totalSpendBDT)}
Traffic Needed: ${formatNumber(results.trafficNeeded)} visitors`;

    try {
      await navigator.clipboard.writeText(text);
      setSnackbar({ open: true, message: "Results copied to clipboard!", severity: "success" });
    } catch (err) {
      setSnackbar({ open: true, message: "Copy failed!", severity: "error" });
    }
  };
  
  const inputFields = [
    { key: "cpo", label: "Cost Per Order (USD)", min: 0, step: "any" },
    { key: "orderGoal", label: "Order Goal", min: 0, step: 1 },
    { key: "conversionRate", label: "Conversion Rate (%)", min: 0, step: 0.1 },
    { key: "usdToBdt", label: "USD to BDT Rate", min: 1, step: "any" },
  ];

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
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold mb-3 text-white">Budget Planner</h2>
        <p className="text-sm text-gray-300 mb-6">
          Set your revenue goals and conversion metrics to plan your ad budget.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {inputFields.map(({ key, label, min, step }) => (
          <label key={key} className="col-span-1 md:col-span-1 flex flex-col">
            <span className="text-xs text-gray-300 mb-1">{label}</span>
            <input
              type="number"
              min={min}
              step={step}
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

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-gray-800 rounded">
          <div className="text-xs text-gray-400">Total Ad Spend (USD)</div>
          <div className="text-xl font-medium text-white">{formatUSD(results.totalSpendUSD)}</div>
          <div className="text-xs text-gray-500">total advertising budget</div>
        </div>

        <div className="p-4 bg-gray-800 rounded">
          <div className="text-xs text-gray-400">Total Ad Spend (BDT)</div>
          <div className="text-xl font-medium text-white">{formatBDT(results.totalSpendBDT)}</div>
          <div className="text-xs text-gray-500">total advertising budget</div>
        </div>

        <div className="p-4 bg-gray-800 rounded">
          <div className="text-xs text-gray-400">Traffic Needed</div>
          <div className="text-xl font-medium text-white">{formatNumber(results.trafficNeeded)}</div>
          <div className="text-xs text-gray-500">visitors needed</div>
        </div>
      </div>
    </div>
  );
}
