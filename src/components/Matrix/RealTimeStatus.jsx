import React, { useState } from "react";

const mockData = [
  {
    model: "920DX",
    serialNo: "12345",
    bagId: "001601",
    bhsBagId: "ScanOS-90X",
    iataId: "Default",
    routingCode: "1",
    passNumber: "1",
    scannedTime: "2023-03-25 3:04:02 PM IST",
    scannerDecision: "Rejected",
    level2Id: "",
    level2Decision: "Rejected",
    level3Id: "",
    level3Decision: "",
    reason: "",
  },
  // Add more rows as needed
];

export default function RealTimeStatus() {
  const [isLive, setIsLive] = useState(true);
  const [model, setModel] = useState("All");

  return (
    <div className="bg-[#151c28] text-white w-full min-h-[calc(100vh-80px)] px-0 py-8">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-blue-400 font-semibold text-xl mb-8 text-center">
          Real Time Status
        </h2>
        {/* Controls */}
        <div className="flex flex-wrap gap-4 mb-6 items-end">
          <button
            className={`px-6 py-2 rounded font-semibold ${
              isLive
                ? "bg-green-500 text-white"
                : "bg-[#232b3b] text-green-400 border border-green-400"
            }`}
            onClick={() => setIsLive(true)}
          >
            Live
          </button>
          <button
            className={`px-6 py-2 rounded font-semibold ${
              !isLive
                ? "bg-blue-500 text-white"
                : "bg-[#232b3b] text-blue-400 border border-blue-400"
            }`}
            onClick={() => setIsLive(false)}
          >
            ||
          </button>
          <div>
            <label className="block text-sm mb-1 text-[#bfc9db]">Model</label>
            <select
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="bg-[#232b3b] border border-[#232b3b] text-white rounded px-2 py-1 w-40"
            >
              <option value="All">All</option>
              <option value="920DX">920DX</option>
              {/* Add more models as needed */}
            </select>
          </div>
        </div>
        {/* Table */}
        <div className="overflow-x-auto rounded">
          <table className="min-w-full bg-[#232b3b] rounded">
            <thead>
              <tr className="text-[#bfc9db] text-sm">
                <th className="px-3 py-2 font-semibold">Model</th>
                <th className="px-3 py-2 font-semibold">Serial No</th>
                <th className="px-3 py-2 font-semibold">Bag ID</th>
                <th className="px-3 py-2 font-semibold">BHS Bag ID</th>
                <th className="px-3 py-2 font-semibold">IATA ID</th>
                <th className="px-3 py-2 font-semibold">Routing Code</th>
                <th className="px-3 py-2 font-semibold">Pass Number</th>
                <th className="px-3 py-2 font-semibold">Scanned Time</th>
                <th className="px-3 py-2 font-semibold">Scanner Decision</th>
                <th className="px-3 py-2 font-semibold">Level 2 ID</th>
                <th className="px-3 py-2 font-semibold">Level 2 Decision</th>
                <th className="px-3 py-2 font-semibold">Level 3 ID</th>
                <th className="px-3 py-2 font-semibold">Level 3 Decision</th>
                <th className="px-3 py-2 font-semibold">Reason</th>
              </tr>
            </thead>
            <tbody>
              {mockData.length === 0 ? (
                <tr>
                  <td colSpan={14} className="text-center text-[#bfc9db] py-8">
                    No items to display
                  </td>
                </tr>
              ) : (
                mockData.map((row, idx) => (
                  <tr key={idx} className="border-b border-[#232b3b]">
                    <td className="px-3 py-2">{row.model}</td>
                    <td className="px-3 py-2">{row.serialNo}</td>
                    <td className="px-3 py-2">{row.bagId}</td>
                    <td className="px-3 py-2">{row.bhsBagId}</td>
                    <td className="px-3 py-2">{row.iataId}</td>
                    <td className="px-3 py-2">{row.routingCode}</td>
                    <td className="px-3 py-2">{row.passNumber}</td>
                    <td className="px-3 py-2">{row.scannedTime}</td>
                    <td className="px-3 py-2">{row.scannerDecision}</td>
                    <td className="px-3 py-2">{row.level2Id}</td>
                    <td className="px-3 py-2">{row.level2Decision}</td>
                    <td className="px-3 py-2">{row.level3Id}</td>
                    <td className="px-3 py-2">{row.level3Decision}</td>
                    <td className="px-3 py-2">{row.reason}</td>
                  </tr>
                ))
              )}
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
