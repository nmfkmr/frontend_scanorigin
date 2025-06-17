import React, { useState } from "react";

export default function StationMapping() {
  const [tab, setTab] = useState(0);
  const [selectedScanner, setSelectedScanner] = useState("12345 (#920DX)");
  const [selectedOperators, setSelectedOperators] = useState([true, true, true, true, true, true]);

  const operators = [
    { name: "Sean Connery", id: "0000" },
    { name: "Roger Moore", id: "1111" },
    { name: "Timothy Dalton", id: "2222" },
    { name: "Peewee Herman", id: "3333" },
    { name: "Sarah Connor", id: "4444" },
    { name: "SERVICE 2", id: "SERVICE2" },
  ];

  const handleCheckboxChange = (index) => {
    const updated = [...selectedOperators];
    updated[index] = !updated[index];
    setSelectedOperators(updated);
  };

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

  const [availableOperators, setAvailableOperators] = useState([
  { name: "Sean Connery", id: "0000" },
  { name: "Roger Moore", id: "1111" },
  { name: "Timothy Dalton", id: "2222" },
  { name: "Peewee Herman", id: "3333" },
  { name: "Sarah Connor", id: "4444" },
  { name: "SERVICE 2", id: "SERVICE2" },
]);

const [selectedOperatorModels, setSelectedOperatorModels] = useState([]);

const moveRight = (index) => {
  const selected = availableOperators[index];
  setSelectedOperatorModels([...selectedOperatorModels, selected]);
  setAvailableOperators(availableOperators.filter((_, i) => i !== index));
};

const moveLeft = (index) => {
  const selected = selectedOperatorModels[index];
  setAvailableOperators([...availableOperators, selected]);
  setSelectedOperatorModels(selectedOperatorModels.filter((_, i) => i !== index));
};

const moveAllRight = () => {
  setSelectedOperatorModels([...selectedOperatorModels, ...availableOperators]);
  setAvailableOperators([]);
};

const moveAllLeft = () => {
  setAvailableOperators([...availableOperators, ...selectedOperatorModels]);
  setSelectedOperatorModels([]);
};

  return (
    <div className="bg-gray-900 rounded-lg px-12 py-6 shadow-md">
    <div className="p-6 text-white">
      <div className="flex flex-col items-center mb-4">
        <span className="text-blue-400 font-semibold text-xl mb-2 text-center">
          Station Mapping
        </span>
      </div>

      <div className="flex gap-4 mb-6">
        <button
          className={`px-4 py-2 rounded-t ${
            tab === 0 ? "bg-blue-500 text-white" : "bg-gray-800 text-blue-400"
          }`}
          onClick={() => setTab(0)}
        >
          Scanner Station To Operator
        </button>
        <button
          className={`px-4 py-2 rounded-t ${
            tab === 1 ? "bg-blue-500 text-white" : "bg-gray-800 text-blue-400"
          }`}
          onClick={() => setTab(1)}
        >
          Scanner Model To Operator Model
        </button>
      </div>
      
        {tab === 0 ? (
          <>
            <div className="mb-4">
              <label className="block mb-2 text-blue-400 font-medium">Select a Scanner</label>
              <select
                className="w-full bg-gray-800 text-white p-2 rounded border border-gray-700"
                value={selectedScanner}
                onChange={(e) => setSelectedScanner(e.target.value)}
              >
                <option value="12345 (#920DX)">12345(920DX)</option>
                {/* Add more scanners if needed */}
              </select>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left table-auto border border-gray-700 rounded">
                <thead>
                  <tr className="bg-gray-800 text-blue-300">
                    <th className="p-2 border border-gray-700">All</th>
                    <th className="p-2 border border-gray-700">Name</th>
                    <th className="p-2 border border-gray-700">ID Code</th>
                  </tr>
                </thead>
                <tbody>
                  {operators.map((op, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-gray-800" : "bg-gray-700"}
                    >
                      <td className="p-2 border border-gray-700 text-center">
                        <input
                          type="checkbox"
                          checked={selectedOperators[index]}
                          onChange={() => handleCheckboxChange(index)}
                        />
                      </td>
                      <td className="p-2 border border-gray-700">{op.name}</td>
                      <td className="p-2 border border-gray-700">{op.id}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-between mt-6">
              <div className="space-x-2">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded">
                  Save
                </button>
                <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded">
                  Undo Changes
                </button>
              </div>
              <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded">
                Apply Configuration to Other Scanners
              </button>
            </div>
          </>
        ) : (
          <div>
  <div className="mb-4">
    <label className="block mb-2 text-blue-400 font-medium">Select a Scanner</label>
    <select
      className="w-full bg-gray-800 text-white p-2 rounded border border-gray-700"
      value={selectedScanner}
      onChange={(e) => setSelectedScanner(e.target.value)}
    >
      <option value="12345 (#920DX)">12345(920DX)</option>
    </select>
  </div>

  <div className="flex justify-between items-center">
    <div className="w-1/2">
      <label className="text-blue-400 font-medium block mb-2">Available Operator Models</label>
      <div className="h-48 overflow-y-auto bg-gray-800 text-white rounded border border-gray-700 p-2">
        {availableOperators.map((op, index) => (
          <div key={index} className="mb-1 cursor-pointer hover:bg-gray-700 p-1 rounded"
            onClick={() => moveRight(index)}>
            {op.name}
          </div>
        ))}
      </div>
    </div>

    <div className="flex flex-col items-center mx-4 space-y-2">
      <button onClick={moveAllRight} className="text-white text-2xl bg-blue-600 hover:bg-blue-700 px-2 py-1 rounded">&gt;&gt;</button>
      {/* <button onClick={moveRight} className="text-white text-2xl bg-blue-600 hover:bg-blue-700 px-2 py-1 rounded">&gt;</button>
      <button onClick={moveLeft} className="text-white text-2xl bg-blue-600 hover:bg-blue-700 px-2 py-1 rounded">&lt;</button> */}
      <button onClick={moveAllLeft} className="text-white text-2xl bg-blue-600 hover:bg-blue-700 px-2 py-1 rounded">&lt;&lt;</button>
    </div>

    <div className="w-1/2">
      <label className="text-blue-400 font-medium block mb-2">Selected Operator Models</label>
      <div className="h-48 overflow-y-auto bg-gray-800 text-white rounded border border-gray-700 p-2">
        {selectedOperatorModels.map((op, index) => (
          <div key={index} className="mb-1 cursor-pointer hover:bg-gray-700 p-1 rounded"
            onClick={() => moveLeft(index)}>
            {op.name}
          </div>
        ))}
      </div>
    </div>
  </div>

  <div className="flex justify-between mt-6">
    <div className="space-x-2">
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded">
        Save
      </button>
      <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded">
        Undo Changes
      </button>
    </div>
  </div>
</div>
        )}
      </div>
    </div>
  );
}