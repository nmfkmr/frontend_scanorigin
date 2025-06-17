import React, { useState, useRef, useEffect } from "react";

export default function MultiSelectDropdown({ options, selected, onChange }) {
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

  const display = selected.length > 0 ? selected.join(", ") : "Select...";

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        className="w-full bg-gray-800 border border-blue-500 rounded px-2 py-1 text-white flex justify-between items-center"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="truncate">{display}</span>
        <span className="ml-2">&#9660;</span>
      </button>
      {open && (
        <div className="absolute z-10 mt-1 w-full bg-gray-900 border border-blue-500 rounded shadow-lg max-h-40 overflow-auto">
          {options.map((opt) => (
            <label key={opt} className="flex items-center px-2 py-1 hover:bg-blue-800 cursor-pointer">
              <input
                type="checkbox"
                checked={selected.includes(opt)}
                onChange={() => {
                  let next = [...selected];
                  if (opt === "END") {
                    next = next.includes("END") ? [] : ["END"];
                  } else {
                    next = next.filter((v) => v !== "END");
                    if (next.includes(opt)) {
                      next = next.filter((v) => v !== opt);
                    } else {
                      next.push(opt);
                    }
                  }
                  onChange(next);
                }}
                className="mr-2 accent-blue-500"
              />
              <span>{opt}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}