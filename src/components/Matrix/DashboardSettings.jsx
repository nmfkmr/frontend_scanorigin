import React, { useState } from "react";

export default function DashboardSettings() {
  // State for each setting
  const [realTimeRefresh, setRealTimeRefresh] = useState(5);
  const [realTimeBags, setRealTimeBags] = useState(1500);
  const [queueRefresh, setQueueRefresh] = useState(60);
  const [scannerRefresh, setScannerRefresh] = useState(60);
  const [errorRefresh, setErrorRefresh] = useState(5);
  const [errorCount, setErrorCount] = useState(1500);
  const [showHMI, setShowHMI] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSave = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);
    // TODO: Add API call to save settings
  };

  const sectionClass = "mb-8";
  const labelClass = "block text-white font-medium mb-1";
  const inputClass =
    "bg-[#232b3b] border border-[#232b3b] text-white rounded px-2 py-1 w-32 focus:outline-none focus:ring-2 focus:ring-blue-400";
  const groupClass = "mb-4";

  return (
    <div className="bg-[#151c28] text-white rounded-lg px-12 py-8 shadow-lg w-full">
      <h2 className="text-blue-400 font-semibold text-xl mb-8 text-center">
        Dashboard Settings
      </h2>

      {/* Real Time Status */}
      <div className={sectionClass}>
        <h3 className="text-blue-400 font-semibold mb-2">Real Time Status</h3>
        <div className={groupClass}>
          <label className={labelClass}>
            Screen Refresh Interval (5–60 Seconds)
          </label>
          <input
            type="number"
            min={5}
            max={60}
            value={realTimeRefresh}
            onChange={(e) => setRealTimeRefresh(Number(e.target.value))}
            className={inputClass}
          />{" "}
          <span className="text-[#bfc9db] ml-2">Seconds</span>
        </div>
        <div className={groupClass}>
          <label className={labelClass}>
            Number of Bags to Show (1–1500 Bags)
          </label>
          <input
            type="number"
            min={1}
            max={1500}
            value={realTimeBags}
            onChange={(e) => setRealTimeBags(Number(e.target.value))}
            className={inputClass}
          />{" "}
          <span className="text-[#bfc9db] ml-2">Bags</span>
        </div>
      </div>

      {/* Queue Status */}
      <div className={sectionClass}>
        <h3 className="text-blue-400 font-semibold mb-2">Queue Status</h3>
        <div className={groupClass}>
          <label className={labelClass}>
            Screen Refresh Interval (5–3600 Seconds)
          </label>
          <input
            type="number"
            min={5}
            max={3600}
            value={queueRefresh}
            onChange={(e) => setQueueRefresh(Number(e.target.value))}
            className={inputClass}
          />{" "}
          <span className="text-[#bfc9db] ml-2">Seconds</span>
        </div>
      </div>

      {/* Scanner & Operators */}
      <div className={sectionClass}>
        <h3 className="text-blue-400 font-semibold mb-2">Scanner & Operators</h3>
        <div className={groupClass}>
          <label className={labelClass}>
            Screen Refresh Interval (5–3600 Seconds)
          </label>
          <input
            type="number"
            min={5}
            max={3600}
            value={scannerRefresh}
            onChange={(e) => setScannerRefresh(Number(e.target.value))}
            className={inputClass}
          />{" "}
          <span className="text-[#bfc9db] ml-2">Seconds</span>
        </div>
      </div>

      {/* Error Messages */}
      <div className={sectionClass}>
        <h3 className="text-blue-400 font-semibold mb-2">Error Messages</h3>
        <div className={groupClass}>
          <label className={labelClass}>
            Screen Refresh Interval (5–60 Seconds)
          </label>
          <input
            type="number"
            min={5}
            max={60}
            value={errorRefresh}
            onChange={(e) => setErrorRefresh(Number(e.target.value))}
            className={inputClass}
          />{" "}
          <span className="text-[#bfc9db] ml-2">Seconds</span>
        </div>
        <div className={groupClass}>
          <label className={labelClass}>
            Number of Errors to Show (1–1500 Errors)
          </label>
          <input
            type="number"
            min={1}
            max={1500}
            value={errorCount}
            onChange={(e) => setErrorCount(Number(e.target.value))}
            className={inputClass}
          />{" "}
          <span className="text-[#bfc9db] ml-2">Errors</span>
        </div>
        <div className="flex items-center mb-2">
          <input
            type="checkbox"
            checked={showHMI}
            onChange={(e) => setShowHMI(e.target.checked)}
            className="accent-blue-500 mr-2"
            id="showHMI"
          />
          <label htmlFor="showHMI" className="text-white">
            Show HMI Info
          </label>
        </div>
      </div>

      <div className="flex justify-end mt-8">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-2 font-semibold rounded"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
      {showSuccess && (
        <div className="text-green-400 mt-4 text-center">
          Settings saved successfully!
        </div>
      )}
    </div>
  );
}
