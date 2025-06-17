import React, { useState, useRef, useEffect } from "react";

export default function StationsMultiSelectDropdown({ stations, selectedStationIds, setSelectedStationIds }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const allSelected = stations.length > 0 && selectedStationIds.length === stations.length;
  const display = allSelected
    ? "All Stations"
    : selectedStationIds.length === 0
      ? "Select Station"
      : stations
          .filter(st => selectedStationIds.includes(st.id))
          .map(st => st.name)
          .join(", ");

  const handleSelectAll = () => {
    if (allSelected) {
      setSelectedStationIds([]);
    } else {
      setSelectedStationIds(stations.map(st => st.id));
    }
  };

  const handleStationToggle = (id) => {
    if (selectedStationIds.includes(id)) {
      setSelectedStationIds(selectedStationIds.filter(sid => sid !== id));
    } else {
      setSelectedStationIds([...selectedStationIds, id]);
    }
  };

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        className="w-56 bg-gray-800 border border-blue-500 rounded px-2 py-1 text-white flex justify-between items-center"
        onClick={() => setOpen(o => !o)}
      >
        <span className="truncate">{display}</span>
        <span className="ml-2">&#9660;</span>
      </button>
      {open && (
        <div className="absolute z-10 mt-1 w-full bg-gray-900 border border-blue-500 rounded shadow-lg max-h-60 overflow-auto">
          <label className="flex items-center px-2 py-1 hover:bg-blue-800 cursor-pointer font-semibold">
            <input
              type="checkbox"
              checked={allSelected}
              onChange={handleSelectAll}
              className="mr-2 accent-blue-500"
            />
            Select All
          </label>
          <div className="border-b border-blue-700 my-1" />
          {stations.map(station => (
            <label key={station.id} className="flex items-center px-2 py-1 hover:bg-blue-800 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedStationIds.includes(station.id)}
                onChange={() => handleStationToggle(station.id)}
                className="mr-2 accent-blue-500"
              />
              {station.name}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}