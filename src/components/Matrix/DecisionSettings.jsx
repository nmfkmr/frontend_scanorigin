import React, { useState } from 'react';

export default function DecisionSettings() {
  const [activeTab, setActiveTab] = useState('operator');

  const tabClass = (tab) =>
    `px-4 py-2 rounded-t-md font-medium ${
      activeTab === tab
        ? 'bg-blue-600 text-white'
        : 'bg-gray-800 text-gray-300 hover:bg-blue-500 hover:text-white'
    }`;

  return (
    <div className="bg-gray-900 text-white rounded-lg p-6 shadow-md">
      <h2 className="text-blue-400 font-semibold text-xl mb-4 text-center">
        Decision Settings
      </h2>

      {/* Tabs */}
      <div className="flex space-x-4 mb-6">
        <button onClick={() => setActiveTab('decision')} className={tabClass('decision')}>Decision Settings</button>
        <button onClick={() => setActiveTab('scanner')} className={tabClass('scanner')}>Scanner</button>
        <button onClick={() => setActiveTab('operator')} className={tabClass('operator')}>Operator</button>
        
      </div>

      {/* Tab Content */}
      <div className="bg-gray-800 p-6 rounded-md">
        {activeTab === 'scanner' && <ScannerSettings />}
        {activeTab === 'operator' && <OperatorSettings />}
        {activeTab === 'decision' && <DecisionConfig />}
      </div>
    </div>
  );
}

// Tab Components
function ScannerSettings() {
  return (
    <div className="grid gap-4">
      <div>
        <label className="block mb-1">Select a Scanner</label>
        <select className="w-full p-2 rounded bg-gray-700 text-white">
          <option>12345 (9020DX)</option>
        </select>
      </div>

      <div>
        <label className="block mb-1">Default Decision Type</label>
        <select className="w-full p-2 rounded bg-gray-700 text-white">
          <option>Reject</option>
          <option>Accept</option>
        </select>
      </div>

      <div>
        <input type="checkbox" id="secondScan" />
        <label htmlFor="secondScan" className="ml-2">Enable Second Scan</label>
      </div>

      <div className="mt-4">
        <p className="mb-2">Scan Stop</p>
        <div className="space-y-2">
          <label><input type="radio" name="scanStop" /> Never Stop Scan</label><br />
          <label><input type="radio" name="scanStop" /> Stop if All Operators are Unavailable</label><br />
          <label><input type="radio" name="scanStop" /> Stop if Operators Unavailable in Inspection Point</label>
        </div>
      </div>

      <button className="mt-6 bg-blue-500 px-4 py-2 text-white rounded hover:bg-blue-600">
        Apply Configuration to Other Scanners
      </button>
    </div>
  );
}

function OperatorSettings() {
  return (
    <div className="grid grid-cols-2 gap-6">
      {['Level 2', 'Level 3'].map(level => (
        <div key={level} className="bg-slate-700 p-4 rounded">
          <h3 className="font-semibold mb-2">{level}</h3>
          <label className="block mb-1">Max Time for Decisions (TMCB)</label>
          <input type="number" className="w-full p-2 rounded bg-gray-600 mb-2" placeholder="30" />

          <label className="block mb-1">Min. Processing Time (TGO)</label>
          <input type="number" className="w-full p-2 rounded bg-gray-600 mb-2" placeholder="5" />

          <label className="block mb-1">Enable Max View Time (TMO)</label>
          <input type="number" className="w-full p-2 rounded bg-gray-600" placeholder="0" />
        </div>
      ))}
    </div>
  );
}

function DecisionConfig() {
  return (
    <div className="text-center text-gray-300 italic">
      Future decision configuration options will go here.
    </div>
  );
}
