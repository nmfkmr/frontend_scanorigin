import React, { useState } from "react";

export default function FindBag() {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="bg-[#151c28] text-white w-full min-h-[calc(100vh-80px)] px-0 py-8">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-blue-400 font-semibold text-xl mb-8 text-center">
          Find Bag
        </h2>
        {/* Date Range */}
        <div className="flex flex-wrap gap-6 mb-4 items-end">
          <div>
            <label className="block text-sm mb-1 text-[#bfc9db]">From</label>
            <input
              type="datetime-local"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className="bg-[#232b3b] border border-[#232b3b] text-white rounded px-2 py-1 w-56"
            />
          </div>
          <div>
            <label className="block text-sm mb-1 text-[#bfc9db]">To</label>
            <input
              type="datetime-local"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              className="bg-[#232b3b] border border-[#232b3b] text-white rounded px-2 py-1 w-56"
            />
          </div>
        </div>
        {/* Filters */}
        <button
          className="w-full text-left bg-[#232b3b] text-blue-400 px-4 py-2 rounded mb-4 font-semibold"
          onClick={() => setShowFilters((f) => !f)}
        >
          {showFilters ? "▼ Filters" : "► Filters"}
        </button>
        {showFilters && (
          <div className="bg-[#1a2233] p-4 rounded mb-4">
            {/* Add filter controls here */}
            <span className="text-[#bfc9db]">[Add filter controls here]</span>
          </div>
        )}
        {/* Run Report */}
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded font-semibold mb-4">
          Run Report
        </button>
        {/* Export All Pages */}
        <div className="mb-2">
          <button className="bg-[#232b3b] hover:bg-blue-600 text-blue-400 px-4 py-2 rounded font-semibold">
            Export All Pages
          </button>
        </div>
        {/* Table */}
        <div className="overflow-x-auto rounded">
          <table className="min-w-full bg-[#232b3b] rounded">
            <thead>
              <tr className="text-[#bfc9db] text-sm">
                <th className="px-3 py-2 font-semibold">Bag ID</th>
                <th className="px-3 py-2 font-semibold">BHS Bag ID</th>
                <th className="px-3 py-2 font-semibold">IATA ID</th>
                <th className="px-3 py-2 font-semibold">SiteCode</th>
                <th className="px-3 py-2 font-semibold">Manufacturer Name</th>
                <th className="px-3 py-2 font-semibold">Model</th>
                <th className="px-3 py-2 font-semibold">Serial No</th>
                <th className="px-3 py-2 font-semibold">Flight Number</th>
                <th className="px-3 py-2 font-semibold">Source</th>
                <th className="px-3 py-2 font-semibold">Destination</th>
                <th className="px-3 py-2 font-semibold">Routing Code</th>
                <th className="px-3 py-2 font-semibold">Scan Date</th>
                <th className="px-3 py-2 font-semibold">Scan Time</th>
                <th className="px-3 py-2 font-semibold">Scanner Decision</th>
                <th className="px-3 py-2 font-semibold">Scanner Decision Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={15} className="text-center text-[#bfc9db] py-8">
                  No items to display
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="flex items-center justify-start gap-2 mt-4">
          <button
            className="bg-[#232b3b] text-[#bfc9db] px-2 py-1 rounded"
            disabled
          >
            {"<"}
          </button>
          <button className="bg-blue-500 text-white px-3 py-1 rounded font-semibold">
            0
          </button>
          <button
            className="bg-[#232b3b] text-[#bfc9db] px-2 py-1 rounded"
            disabled
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}
