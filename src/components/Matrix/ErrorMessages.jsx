import React, { useState } from "react";

export default function ErrorMessages() {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [isLive, setIsLive] = useState(true);

  return (
    <div className="bg-[#151c28] text-white w-full min-h-[calc(100vh-80px)] px-0 py-8">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-blue-400 font-semibold text-xl mb-8 text-center">
          Error Messages
        </h2>
        {/* Date Range */}
        <div className="flex flex-wrap gap-6 mb-4 items-end">
          <div>
            <label className="block text-sm mb-1 text-[#bfc9db]">
              From Date
            </label>
            <input
              type="datetime-local"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className="bg-[#232b3b] border border-[#232b3b] text-white rounded px-2 py-1 w-56"
            />
          </div>
          <div>
            <label className="block text-sm mb-1 text-[#bfc9db]">
              To Date
            </label>
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
        {/* Live Toggle */}
        <div className="flex items-center gap-2 mb-4">
          <button
            className={`px-6 py-2 rounded font-semibold ${
              isLive ? "bg-green-600" : "bg-[#232b3b] text-[#bfc9db]"
            }`}
            onClick={() => setIsLive(true)}
          >
            Live
          </button>
          <button
            className={`px-4 py-2 rounded font-semibold ${
              !isLive ? "bg-blue-500" : "bg-[#232b3b] text-[#bfc9db]"
            }`}
            onClick={() => setIsLive(false)}
          >
            <span className="material-icons align-middle">pause</span>
          </button>
        </div>
        {/* Table */}
        <div className="overflow-x-auto rounded">
          <table className="min-w-full bg-[#232b3b] rounded">
            <thead>
              <tr className="text-[#bfc9db] text-sm">
                <th className="px-4 py-2 font-semibold">Reporting System</th>
                <th className="px-4 py-2 font-semibold">
                  Reporting System Type
                </th>
                <th className="px-4 py-2 font-semibold">Sub System</th>
                <th className="px-4 py-2 font-semibold">Error Date/Time</th>
                <th className="px-4 py-2 font-semibold">Severity</th>
                <th className="px-4 py-2 font-semibold">Error Code</th>
                <th className="px-4 py-2 font-semibold">Error Description</th>
                <th className="px-4 py-2 font-semibold">Action Info</th>
                <th className="px-4 py-2 font-semibold">Additional Info</th>
                <th className="px-4 py-2 font-semibold">Intimated?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={10} className="text-center text-[#bfc9db] py-8">
                  No Records Exist
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
