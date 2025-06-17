import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MultiSelectDropdown from "./MultiSelectDropdown";
import StationsMultiSelectDropdown from "./StationsMultiSelectDropdown";

function Toggle({ checked, onChange }) {
  return (
    <button
      type="button"
      className={`w-16 h-8 rounded-full border-2 border-blue-500 flex items-center transition-colors duration-200 focus:outline-none ${
        checked ? "bg-blue-500" : "bg-black"
      }`}
      onClick={() => onChange(!checked)}
    >
      <span
        className={`w-7 h-7 bg-white rounded-full shadow-md transform transition-transform duration-200 ${
          checked ? "translate-x-8" : "translate-x-1"
        }`}
      />
      <span
        className={`absolute ml-2 text-xs font-bold ${
          checked ? "text-white left-4" : "text-blue-500 left-2"
        }`}
        style={{ left: checked ? "30px" : "8px" }}
      >
        {checked ? "ON" : "OFF"}
      </span>
    </button>
  );
}

function getNextLevels(levelId) {
  // Level IDs: 1 = Scanner, 2 = Level 2, 3 = Level 3
  if (levelId === 1) return ["Level 2", "Level 3", "Search Station", "END"];
  if (levelId === 2) return ["Level 3", "Search Station", "END"];
  if (levelId === 3) return ["Search Station", "END"];
  return [];
}

export default function FollowOnActions() {
  const navigate = useNavigate();

  const [stations, setStations] = useState([]);
  const [actions, setActions] = useState([]);
  const [selectedStationIds, setSelectedStationIds] = useState([]);
  const [routingConfig, setRoutingConfig] = useState("Default");

  // Fetch stations on mount
  useEffect(() => {
    fetch("http://localhost:5000/api/stations")
      .then((res) => res.json())
      .then((data) =>
        setStations(
          data.map((station) => ({
            ...station,
            checked: false,
          }))
        )
      );
  }, []);

  // Fetch actions when any station is selected (example: fetch for the first selected station)
  useEffect(() => {
    if (selectedStationIds.length > 0) {
      fetch(
        `http://localhost:5000/api/follow-on/actions/${selectedStationIds[0]}`
      )
        .then((res) => res.json())
        .then((data) => setActions(data));
    } else {
      setActions([]);
    }
  }, [selectedStationIds]);

  // Handler for "Select All"
  const handleSelectAllStations = (e) => {
    const checked = e.target.checked;
    setStations((prev) =>
      prev.map((station) => ({
        ...station,
        checked,
      }))
    );
    setSelectedStationIds(checked ? stations.map((s) => s.id) : []);
  };

  // Handler for individual station checkbox
  const handleStationCheck = (id) => {
    setStations((prev) =>
      prev.map((station) =>
        station.id === id
          ? { ...station, checked: !station.checked }
          : station
      )
    );
    setSelectedStationIds((prev) =>
      prev.includes(id)
        ? prev.filter((sid) => sid !== id)
        : [...prev, id]
    );
  };

  // Schedule change handler
  const handleScheduleChange = (idx, value) => {
    setActions((prev) =>
      prev.map((action, i) =>
        i === idx
          ? {
              ...action,
              BagDecisionState: Array.isArray(value) ? value : [value],
              SendResultToScanner:
                Array.isArray(value) && value.includes("END")
                  ? 1
                  : action.SendResultToScanner,
            }
          : action
      )
    );
  };

  // Send result to scanner handler
  const handleSendChange = (idx, checked) => {
    setActions((prev) =>
      prev.map((action, i) =>
        i === idx
          ? { ...action, SendResultToScanner: checked ? 1 : 0 }
          : action
      )
    );
  };

  const handleSave = () => {
    // Convert BagDecisionState array to string for each action
    const actionsToSave = actions.map((action) => ({
      ...action,
      BagDecisionState: Array.isArray(action.BagDecisionState)
        ? action.BagDecisionState.join(",")
        : action.BagDecisionState,
    }));

    fetch("http://localhost:5000/api/follow-on/actions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        stationIds: selectedStationIds,
        actions: actionsToSave,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) alert("Saved!");
      });
  };

  return (
    <div className="min-h-screen bg-black text-white px-12 py-6">
      {/* Follow-On Action Configuration */}
      <div className="bg-gray-900 rounded-lg p-8 shadow-lg">
        <div className="flex mb-6">
          

          {/* Action Table */}
          <div className="w-full">
            {/* Centered Title */}
            <div className="flex flex-col items-center mb-4">
              <span className="text-blue-400 font-semibold text-xl mb-2 text-center">
                Follow-On Action Configuration
              </span>
              
            </div>
            <div className="flex gap-8 mb-6 justify-center">
              {/* Routing Configuration Dropdown */}
              <div className="flex flex-col items-start">
                <span className="mb-1 text-white">Routing Configuration</span>
                <select
                  className="bg-gray-800 border border-blue-500 rounded px-2 py-1 text-white w-44"
                  value={routingConfig}
                  onChange={e => setRoutingConfig(e.target.value)}
                >
                  <option value="Default">Default</option>
                  {/* Add more options if needed */}
                </select>
              </div>
              {/* Stations Dropdown */}
              <div className="flex flex-col items-start">
                <span className="mb-1 text-white">Station</span>
                <StationsMultiSelectDropdown
                  stations={stations}
                  selectedStationIds={selectedStationIds}
                  setSelectedStationIds={setSelectedStationIds}
                />
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="bg-blue-800 text-white">
                    <th className="px-3 py-2 font-semibold">Level Name</th>
                    <th className="px-3 py-2 font-semibold">Decision</th>
                    <th className="px-3 py-2 font-semibold">Schedule Level</th>
                    <th className="px-3 py-2 font-semibold">
                      Send Result To Scanner
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {actions.map((action, idx) => (
                    <tr key={action.SerialNo} className="border-b border-blue-900">
                      <td className="px-3 py-2">{action.Level}</td>
                      <td className="px-3 py-2">{action.DecisionReason}</td>
                      <td className="px-3 py-2">
                        <MultiSelectDropdown
                          options={getNextLevels(action.Level_ID)}
                          selected={
                            Array.isArray(action.BagDecisionState)
                              ? action.BagDecisionState
                              : [action.BagDecisionState].filter(Boolean)
                          }
                          onChange={(selected) =>
                            handleScheduleChange(idx, selected)
                          }
                        />
                      </td>
                      <td className="px-3 py-2 text-center">
                        <input
                          type="checkbox"
                          checked={!!action.SendResultToScanner}
                          className="accent-blue-500"
                          onChange={(e) =>
                            handleSendChange(idx, e.target.checked)
                          }
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-end gap-4 mt-6">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded font-semibold"
                onClick={handleSave}
              >
                Save
              </button>
              <button
                className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded font-semibold"
                onClick={() => navigate("/stats")}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}