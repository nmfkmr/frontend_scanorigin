import React, { useState } from 'react';

const OperatorAlarmSettings = () => {
  const [settings, setSettings] = useState({
    level2: { interval: '', allowed: '', grace: '', type: 'No Alarm' },
    level3: { interval: '', allowed: '', grace: '', type: 'No Alarm' },
  });

  const handleChange = (level, field, value) => {
    setSettings(prev => ({
      ...prev,
      [level]: {
        ...prev[level],
        [field]: value,
      },
    }));
  };

  return (
    <div className="bg-[#0F172A] text-white rounded-lg px-12 py-6 shadow-lg ">
      <h2 className="text-blue-400 font-semibold text-xl mb-6 text-center">
        Operator Queue Alarm Settings
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {['level2', 'level3'].map(level => (
          <div key={level} className="bg-slate-800 p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-bold mb-4 text-white">
              {level === 'level2'
                ? 'Level 2 Inspection Point'
                : 'Level 3 Inspection Point'}
            </h3>

            <label className="block mb-1 text-sm font-medium text-white">
              Bag Timeout Interval (1–60 minutes)
            </label>
            <input
              type="number"
              min="1"
              max="60"
              value={settings[level].interval}
              onChange={e => handleChange(level, 'interval', e.target.value)}
              className="w-full bg-slate-700 text-white p-2 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <label className="block mb-1 text-sm font-medium text-white">
              Timeouts Allowed During Interval (1–100)
            </label>
            <input
              type="number"
              min="1"
              max="100"
              value={settings[level].allowed}
              onChange={e => handleChange(level, 'allowed', e.target.value)}
              className="w-full bg-slate-700 text-white p-2 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <label className="block mb-1 text-sm font-medium text-white">
              Alarm Grace Period (1–60 minutes)
            </label>
            <input
              type="number"
              min="1"
              max="60"
              value={settings[level].grace}
              onChange={e => handleChange(level, 'grace', e.target.value)}
              className="w-full bg-slate-700 text-white p-2 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <label className="block mb-1 text-sm font-medium text-white">
              Alarm Type
            </label>
            <select
              value={settings[level].type}
              onChange={e => handleChange(level, 'type', e.target.value)}
              className="w-full bg-slate-700 text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="No Alarm">No Alarm</option>
              <option value="Warning">Warning</option>
              <option value="Critical">Critical</option>
            </select>
          </div>
        ))}
      </div>

      <div className="flex gap-4 mt-8">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 font-semibold rounded-md">
          Save
        </button>
        <button className="bg-slate-600 hover:bg-slate-700 text-white px-6 py-2 font-semibold rounded-md">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default OperatorAlarmSettings;
