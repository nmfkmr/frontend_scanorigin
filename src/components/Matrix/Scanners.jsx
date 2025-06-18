import React, { useState } from "react";

export default function OperatorsDashboard() {
  const [operators, setOperators] = useState([
    { id: "0000", name: "Sean Connery", type: "Level 3", status: "Logoff", sessionLength: "0", bags: 0, accepts: 0, rejects: 0, timeouts: 0, unprocessed: 0 },
    { id: "1111", name: "Roger Moore", type: "Level 3", status: "Logoff", sessionLength: "0", bags: 0, accepts: 0, rejects: 0, timeouts: 0, unprocessed: 0 },
    { id: "2222", name: "Timothy Dalton", type: "Level 3", status: "Logoff", sessionLength: "0", bags: 0, accepts: 0, rejects: 0, timeouts: 0, unprocessed: 0 },
    { id: "3333", name: "Peewee Herman", type: "Level 3", status: "Logoff", sessionLength: "0", bags: 0, accepts: 0, rejects: 0, timeouts: 0, unprocessed: 0 },
    { id: "4444", name: "Sarah Connor", type: "Level 3", status: "Logoff", sessionLength: "0", bags: 0, accepts: 0, rejects: 0, timeouts: 0, unprocessed: 0 },
    { id: "SERVICE2", name: "SERVICE 2", type: "Level 3", status: "Logoff", sessionLength: "0", bags: 0, accepts: 0, rejects: 0, timeouts: 0, unprocessed: 0 },
  ]);

  const [machineModel, setMachineModel] = useState("All");
  const [operatorId, setOperatorId] = useState("All");

  const handleRefresh = () => {
    setOperators([...operators]);
  };

  return (
    <div className="bg-[#181e29] min-h-screen flex flex-col items-start px-0 py-0">
      <div className="w-full flex flex-col items-center">
        <div className="w-full max-w-6xl mt-12">
          <div className="bg-[#23283a] rounded-xl px-10 py-8 shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <span className="text-blue-400 font-semibold text-2xl mb-4 md:mb-0">
                Operator's Dashboard
              </span>
              <div className="flex flex-col md:flex-row gap-4">
                <div>
                  <label className="block mb-1 text-blue-400 font-medium text-sm">Machine Model</label>
                  <select
                    className="bg-[#181e29] text-white p-2 rounded border border-gray-700 w-36"
                    value={machineModel}
                    onChange={(e) => setMachineModel(e.target.value)}
                  >
                    <option value="All">All</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-1 text-blue-400 font-medium text-sm">Operator ID</label>
                  <select
                    className="bg-[#181e29] text-white p-2 rounded border border-gray-700 w-36"
                    value={operatorId}
                    onChange={(e) => setOperatorId(e.target.value)}
                  >
                    <option value="All">All</option>
                    {operators.map((op) => (
                      <option key={op.id} value={op.id}>{op.id}</option>
                    ))}
                  </select>
                </div>
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded mt-6 md:mt-5"
                  onClick={handleRefresh}
                >
                  Refresh
                </button>
              </div>
            </div>

            <div className="bg-[#23283a] rounded-lg p-2">
              <table className="w-full text-left table-auto">
                <thead>
                  <tr className="text-blue-300 text-sm">
                    <th className="p-2">Operator ID</th>
                    <th className="p-2">Name</th>
                    <th className="p-2">Operator Type</th>
                    <th className="p-2">Status</th>
                    <th className="p-2">Session Length</th>
                    <th className="p-2">Bags</th>
                    <th className="p-2">Accepts</th>
                    <th className="p-2">Rejects</th>
                    <th className="p-2">Regular Timeouts</th>
                    <th className="p-2">Unprocessed Rejects</th>
                  </tr>
                </thead>
                <tbody>
                  {operators.length === 0 ? (
                    <tr>
                      <td colSpan={10} className="text-center p-6 text-gray-400">
                        No items to display
                      </td>
                    </tr>
                  ) : (
                    operators.map((op, index) => (
                      <tr
                        key={op.id}
                        className={index % 2 === 0 ? "bg-[#23283a]" : "bg-[#181e29]"}
                      >
                        <td className="p-2 text-gray-400">{op.id}</td>
                        <td className="p-2 text-gray-400">{op.name}</td>
                        <td className="p-2 text-gray-400">{op.type}</td>
                        <td className="p-2 text-gray-400">
                          <span
                            className="px-4 py-1 rounded font-semibold text-sm border"
                            style={{
                              backgroundColor: "#23283a",
                              color: "#ff4d4f",
                              borderColor: "#ff4d4f",
                            }}
                          >
                            {op.status}
                          </span>
                        </td>
                        <td className="p-2 text-gray-400">{op.sessionLength}</td>
                        <td className="p-2 text-gray-400">{op.bags}</td>
                        <td className="p-2 text-gray-400">{op.accepts}</td>
                        <td className="p-2 text-gray-400">{op.rejects}</td>
                        <td className="p-2 text-gray-400">{op.timeouts}</td>
                        <td className="p-2 text-gray-400">{op.unprocessed}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination (optional, static for now) */}
            <div className="flex items-center gap-2 mt-4">
              <button className="bg-[#23283a] text-white px-3 py-1 rounded">&lt;</button>
              <span className="bg-blue-600 text-white px-3 py-1 rounded">1</span>
              <button className="bg-[#23283a] text-white px-3 py-1 rounded">&gt;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
