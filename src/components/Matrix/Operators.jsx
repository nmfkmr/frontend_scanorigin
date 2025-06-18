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
    // Simulate refresh logic here
    setOperators([...operators]);
  };

  return (
    <div className="bg-gray-900 rounded-lg px-12 py-6 shadow-md ">
      <div className="p-6 text-white">
        <div className="flex flex-col items-center mb-4">
          <span className="text-blue-400 font-semibold text-xl mb-2 text-center">
            Operator's Dashboard
          </span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-6 justify-between">
          <div className="flex gap-4">
            <div>
              <label className="block mb-1 text-blue-400 font-medium">Machine Model</label>
              <select
                className="bg-gray-800 text-white p-2 rounded border border-gray-700"
                value={machineModel}
                onChange={(e) => setMachineModel(e.target.value)}
              >
                <option value="All">All</option>
                {/* Add more machine models if needed */}
              </select>
            </div>
            <div>
              <label className="block mb-1 text-blue-400 font-medium">Operator ID</label>
              <select
                className="bg-gray-800 text-white p-2 rounded border border-gray-700"
                value={operatorId}
                onChange={(e) => setOperatorId(e.target.value)}
              >
                <option value="All">All</option>
                {operators.map((op) => (
                  <option key={op.id} value={op.id}>{op.id}</option>
                ))}
              </select>
            </div>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded self-end"
            onClick={handleRefresh}
          >
            Refresh
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left table-auto border border-gray-700 rounded">
            <thead>
              <tr className="bg-gray-800 text-blue-300">
                <th className="p-2 border border-gray-700">Operator ID</th>
                <th className="p-2 border border-gray-700">Name</th>
                <th className="p-2 border border-gray-700">Operator Type</th>
                <th className="p-2 border border-gray-700">Status</th>
                <th className="p-2 border border-gray-700">Session Length</th>
                <th className="p-2 border border-gray-700">Bags</th>
                <th className="p-2 border border-gray-700">Accepts</th>
                <th className="p-2 border border-gray-700">Rejects</th>
                <th className="p-2 border border-gray-700">Regular Timeouts</th>
                <th className="p-2 border border-gray-700">Unprocessed Rejects</th>
              </tr>
            </thead>
            <tbody>
              {operators.length === 0 ? (
                <tr>
                  <td colSpan={10} className="text-center p-6 text-gray-400">
                    No operator data available.
                  </td>
                </tr>
              ) : (
                operators.map((op, index) => (
                  <tr
                    key={op.id}
                    className={index % 2 === 0 ? "bg-gray-800" : "bg-gray-700"}
                  >
                    <td className="p-2 border border-gray-700">{op.id}</td>
                    <td className="p-2 border border-gray-700">{op.name}</td>
                    <td className="p-2 border border-gray-700">{op.type}</td>
                    <td className="p-2 border border-gray-700">
                      <span
                        className={`px-3 py-1 rounded font-semibold text-sm border`}
                        style={{
                          backgroundColor: op.status === "Logoff" ? "#2d2d3a" : "#1e3a2f",
                          color: op.status === "Logoff" ? "#ff4d4f" : "#52ffa8",
                          borderColor: op.status === "Logoff" ? "#ff4d4f" : "#52ffa8",
                        }}
                      >
                        {op.status}
                      </span>
                    </td>
                    <td className="p-2 border border-gray-700">{op.sessionLength}</td>
                    <td className="p-2 border border-gray-700">{op.bags}</td>
                    <td className="p-2 border border-gray-700">{op.accepts}</td>
                    <td className="p-2 border border-gray-700">{op.rejects}</td>
                    <td className="p-2 border border-gray-700">{op.timeouts}</td>
                    <td className="p-2 border border-gray-700">{op.unprocessed}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
