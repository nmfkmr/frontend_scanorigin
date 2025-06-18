import React, { useState } from "react";

export default function QueueStatus() {
  const [page, setPage] = useState(0);

  return (
    <div className="bg-[#151c28] text-white w-full min-h-[calc(100vh-80px)] px-0 py-8">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <h2 className="text-blue-400 font-semibold text-xl mb-8 text-center">
          Queue Status
        </h2>
        {/* Controls */}
        <div className="flex flex-wrap gap-6 mb-4 items-end">
          <div>
            <label className="block text-sm mb-1 text-[#bfc9db]">Last Updated</label>
            <input
              type="text"
              value="09/12/2025 11:11 AM"
              readOnly
              className="bg-[#232b3b] border border-[#232b3b] text-white rounded px-2 py-1 w-56"
            />
          </div>
          <div>
            <label className="block text-sm mb-1 text-[#bfc9db]">Model</label>
            <select className="bg-[#232b3b] border border-[#232b3b] text-white rounded px-2 py-1 w-44">
              <option>920DX</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1 text-[#bfc9db]">Inspection Point</label>
            <select className="bg-[#232b3b] border border-[#232b3b] text-white rounded px-2 py-1 w-44">
              <option>Level 2</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1 text-[#bfc9db]">Grace Period (mins)</label>
            <input
              type="number"
              placeholder="Grace Period"
              className="bg-[#232b3b] border border-[#232b3b] text-white rounded px-2 py-1 w-44"
            />
          </div>
        </div>
        {/* Filters */}
        <button
          className="w-full text-left bg-[#232b3b] text-blue-400 px-4 py-2 rounded mb-4 font-semibold"
          disabled
        >
          ► Filters
        </button>
        {/* Action Buttons */}
        <div className="flex gap-4 mb-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded font-semibold">
            Refresh
          </button>
          <button className="bg-[#232b3b] hover:bg-blue-600 text-blue-400 px-4 py-2 rounded font-semibold">
            Reset All
          </button>
          <button className="bg-[#232b3b] hover:bg-blue-600 text-blue-400 px-4 py-2 rounded font-semibold">
            Alarm
          </button>
        </div>
        {/* Cards */}
        <div className="flex flex-wrap gap-6 mb-8">
          <div className="bg-[#232b3b] rounded p-6 flex-1 min-w-[320px]">
            <h3 className="text-blue-400 font-semibold mb-4">Bag Queue</h3>
            <ul className="mb-4 text-[#bfc9db] text-sm">
              <li>920DX Allocated</li>
              <li>920DX Pending</li>
            </ul>
            <div className="h-32 flex items-center justify-center text-[#bfc9db]">
              {/* Chart placeholder */}
              No Queue Depth Alarms
            </div>
          </div>
          <div className="bg-[#232b3b] rounded p-6 flex-1 min-w-[320px]">
            <h3 className="text-blue-400 font-semibold mb-4">Average Queue Time</h3>
            <ul className="mb-4 text-[#bfc9db] text-sm">
              <li>920DX</li>
            </ul>
            <div className="h-32 flex items-center justify-center text-[#bfc9db]">
              {/* Chart placeholder */}
              No items to display
            </div>
          </div>
        </div>
        {/* Table */}
        <div className="overflow-x-auto rounded mb-8">
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
            {page}
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