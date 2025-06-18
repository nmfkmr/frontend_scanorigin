import React, { useState } from "react";

// Example data for demonstration
const stations = [
  { id: 1, name: "Station A", status: "Active" },
  { id: 2, name: "Station B", status: "Inactive" },
];

const scanners = [
  { id: "12345", model: "920DX" },
  { id: "67890", model: "620XR" },
];

export default function DecisionSettings() {
  const [activeTab, setActiveTab] = useState("operator");
  const [selectedScanner, setSelectedScanner] = useState("");
  const [logoutCount, setLogoutCount] = useState("");
  const [decisionType, setDecisionType] = useState("Reject");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSave = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);
  };

  // Tailwind dark theme classes based on your screenshot
  const bgMain = "bg-[#151c28]";
  const bgPanel = "bg-[#1a2233]";
  const textPrimary = "text-[#4ea1f7]";
  const textWhite = "text-white";
  const borderColor = "border-[#232b3b]";
  const btnPrimary =
    "bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold px-4 py-2 rounded transition";
  const btnSecondary =
    "bg-[#374151] hover:bg-[#4b5563] text-white font-semibold px-4 py-2 rounded transition";

  return (
    <div className={`${bgMain} p-8`}>
        <h2 className={`text-blue-400 font-semibold text-xl mb-2 text-center ${textPrimary}`}>Decision Settings</h2>
        {/* Tabs */}
        <div className="flex mb-8 space-x-2">
            <button
            className={`px-4 py-2 rounded-t ${activeTab === "decision" ? "bg-[#2563eb] text-white" : "bg-[#232b3b] text-[#bfc9db]"} font-semibold`}
            onClick={() => setActiveTab("decision")}
          >
            Decision Settings
          </button>
          <button
            className={`px-4 py-2 rounded-t ${activeTab === "scanner" ? "bg-[#2563eb] text-white" : "bg-[#232b3b] text-[#bfc9db]"} font-semibold`}
            onClick={() => setActiveTab("scanner")}
          >
            Scanner
          </button>
          <button
            className={`px-4 py-2 rounded-t ${activeTab === "operator" ? "bg-[#2563eb] text-white" : "bg-[#232b3b] text-[#bfc9db]"} font-semibold`}
            onClick={() => setActiveTab("operator")}
          >
            Operator
          </button>
          
          
        </div>

        {/* Tab Content */}
        <div>
          {/* Operator Tab */}
          {activeTab === "operator" && (
            <section>
              <h3 className={`text-lg font-semibold mb-4 ${textPrimary}`}>
                Operator Station Decision Settings
              </h3>
              <div className="mb-6">
                <table className={`min-w-full border ${borderColor} rounded overflow-hidden`}>
                  <thead className="bg-[#232b3b]">
                    <tr>
                      <th className="px-4 py-2 text-left text-[#bfc9db]">Station Name</th>
                      <th className="px-4 py-2 text-left text-[#bfc9db]">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stations.length === 0 ? (
                      <tr>
                        <td colSpan={2} className="px-4 py-2 text-center text-[#bfc9db]">
                          No stations available
                        </td>
                      </tr>
                    ) : (
                      stations.map((station, idx) => (
                        <tr
                          key={station.id}
                          className={idx % 2 === 0 ? "bg-[#1a2233]" : "bg-[#232b3b]"}
                        >
                          <td className={`px-4 py-2 ${textWhite}`}>{station.name}</td>
                          <td className={`px-4 py-2 ${textWhite}`}>{station.status}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
              <div className="mb-6">
                <h4 className={`font-medium mb-2 ${textPrimary}`}>
                  Station Decision Configuration Settings
                </h4>
                <label className={`block mb-1 font-medium ${textWhite}`} htmlFor="logoutCount">
                  Auto Logout Bag Count
                </label>
                <input
                  id="logoutCount"
                  type="number"
                  min={0}
                  max={255}
                  value={logoutCount}
                  onChange={(e) => setLogoutCount(e.target.value)}
                  className="border border-[#232b3b] px-2 py-1 rounded w-48 bg-[#232b3b] text-white"
                  placeholder="0 (Disabled)"
                />
                <div className="text-xs text-[#bfc9db] mb-2">
                  Set to 0 to disable auto logout.
                </div>
                <button className={btnPrimary} onClick={handleSave}>
                  Save
                </button>
                {showSuccess && (
                  <div className="text-green-400 mt-2">Settings saved successfully!</div>
                )}
              </div>
            </section>
          )}

          {/* Scanner Tab */}
          {activeTab === "scanner" && (
            <section>
              <h3 className={`text-lg font-semibold mb-4 ${textPrimary}`}>
                Scanner Decision Settings
              </h3>
              <div className="mb-4">
                <label className={`block mb-1 font-medium ${textWhite}`} htmlFor="scannerSelect">
                  Select a Scanner
                </label>
                <select
                  id="scannerSelect"
                  className="border border-[#232b3b] px-2 py-1 rounded w-64 bg-[#232b3b] text-white"
                  value={selectedScanner}
                  onChange={(e) => setSelectedScanner(e.target.value)}
                >
                  <option value="">Select Scanner</option>
                  {scanners.map((scanner) => (
                    <option key={scanner.id} value={scanner.id}>
                      {scanner.id} ({scanner.model})
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className={`block mb-1 font-medium ${textWhite}`} htmlFor="decisionType">
                  Default Decision Type
                </label>
                <select
                  id="decisionType"
                  className="border border-[#232b3b] px-2 py-1 rounded w-64 bg-[#232b3b] text-white"
                  value={decisionType}
                  onChange={(e) => setDecisionType(e.target.value)}
                >
                  <option value="Reject">Reject</option>
                  <option value="Accept">Accept</option>
                  <option value="Review">Review</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox accent-[#2563eb]" />
                  <span className={`ml-2 ${textWhite}`}>Enable Second Scan</span>
                </label>
              </div>
              <div className="mb-6">
                <label className={`block font-medium mb-1 ${textWhite}`}>Scan Stop</label>
                <div className="flex flex-col gap-2">
                  <label className="inline-flex items-center">
                    <input type="radio" name="scanStop" className="form-radio accent-[#2563eb]" />
                    <span className={`ml-2 ${textWhite}`}>Never Stop Scan</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="radio" name="scanStop" className="form-radio accent-[#2563eb]" />
                    <span className={`ml-2 ${textWhite}`}>Stop Scan if All Operators are Unavailable</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="radio" name="scanStop" className="form-radio accent-[#2563eb]" />
                    <span className={`ml-2 ${textWhite}`}>
                      Stop Scan if Operators Unavailable in Inspection Point
                    </span>
                  </label>
                </div>
              </div>
              <button className={btnPrimary} onClick={handleSave}>
                Apply Configuration to Other Scanners
              </button>
              {showSuccess && (
                <div className="text-green-400 mt-2">Settings saved successfully!</div>
              )}
            </section>
          )}

          {/* Decision Settings Tab */}
          {activeTab === "decision" && (
            <section>
              <h3 className={`text-lg font-semibold mb-4 ${textPrimary}`}>
                Levels Of Inspection
              </h3>
              <div className="flex gap-6 mb-6">
                {/* Example for three levels */}
                <div className="border border-[#232b3b] rounded p-4 w-1/3 bg-[#232b3b]">
                  <h4 className={`font-medium mb-2 ${textPrimary}`}>Scanner</h4>
                  <div className="mb-2">
                    <label className={`block text-sm ${textWhite}`}>Max Time For Decisions (TMCB1)</label>
                    <input
                      type="number"
                      className="border border-[#232b3b] px-2 py-1 rounded w-full bg-[#1a2233] text-white"
                      placeholder="30"
                    />
                    <span className="text-xs text-[#bfc9db]">Seconds</span>
                  </div>
                </div>
                <div className="border border-[#232b3b] rounded p-4 w-1/3 bg-[#232b3b]">
                  <h4 className={`font-medium mb-2 ${textPrimary}`}>Level 2</h4>
                  <div className="mb-2">
                    <label className={`block text-sm ${textWhite}`}>Max Time For Decisions (TMCB2)</label>
                    <input
                      type="number"
                      className="border border-[#232b3b] px-2 py-1 rounded w-full bg-[#1a2233] text-white"
                      placeholder="30"
                    />
                    <span className="text-xs text-[#bfc9db]">Seconds</span>
                  </div>
                  <div className="mb-2">
                    <label className={`block text-sm ${textWhite}`}>
                      Min. Processing Time for Operator (TG02)
                    </label>
                    <input
                      type="number"
                      className="border border-[#232b3b] px-2 py-1 rounded w-full bg-[#1a2233] text-white"
                      placeholder="5"
                    />
                    <span className="text-xs text-[#bfc9db]">Seconds</span>
                  </div>
                  <div>
                    <label className="inline-flex items-center">
                      <input type="checkbox" className="form-checkbox accent-[#2563eb]" />
                      <span className={`ml-2 ${textWhite}`}>Enable Max View Time (TM02)</span>
                    </label>
                    <input
                      type="number"
                      className="border border-[#232b3b] px-2 py-1 rounded w-24 ml-2 bg-[#1a2233] text-white"
                      placeholder="0"
                    />
                    <span className="text-xs text-[#bfc9db]">Seconds</span>
                  </div>
                </div>
                <div className="border border-[#232b3b] rounded p-4 w-1/3 bg-[#232b3b]">
                  <h4 className={`font-medium mb-2 ${textPrimary}`}>Level 3</h4>
                  <div className="mb-2">
                    <label className={`block text-sm ${textWhite}`}>Max Time For Decisions (TMCB3)</label>
                    <input
                      type="number"
                      className="border border-[#232b3b] px-2 py-1 rounded w-full bg-[#1a2233] text-white"
                      placeholder="30"
                    />
                    <span className="text-xs text-[#bfc9db]">Seconds</span>
                  </div>
                  <div className="mb-2">
                    <label className={`block text-sm ${textWhite}`}>
                      Min. Processing Time for Operator (TG03)
                    </label>
                    <input
                      type="number"
                      className="border border-[#232b3b] px-2 py-1 rounded w-full bg-[#1a2233] text-white"
                      placeholder="5"
                    />
                    <span className="text-xs text-[#bfc9db]">Seconds</span>
                  </div>
                  <div>
                    <label className="inline-flex items-center">
                      <input type="checkbox" className="form-checkbox accent-[#2563eb]" />
                      <span className={`ml-2 ${textWhite}`}>Enable Max View Time (TM03)</span>
                    </label>
                    <input
                      type="number"
                      className="border border-[#232b3b] px-2 py-1 rounded w-24 ml-2 bg-[#1a2233] text-white"
                      placeholder="0"
                    />
                    <span className="text-xs text-[#bfc9db]">Seconds</span>
                  </div>
                </div>
              </div>
              <button className={btnPrimary} onClick={handleSave}>
                Apply Configuration to Other Scanners
              </button>
              {showSuccess && (
                <div className="text-green-400 mt-2">Settings saved successfully!</div>
              )}
            </section>
          )}
        </div>
    </div>
  );
}
