import React, { useEffect, useState } from 'react';

function Stats() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/stats')
      .then(res => res.json())
      .then(setStats);
  }, []);

  if (!stats) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-3 gap-4 bg-black text-white">
      <div className="p-4 rounded col-span-1">
        <div className="flex items-center mb-8">
          <div className="flex-1 border-t border-blue-500"></div>
          <span className="px-4 text-blue-500 text-center font-light uppercase tracking-wide text-lg">Bag Stats</span>
          <div className="flex-1 border-t border-blue-500"></div>
        </div>
        <div className="grid grid-cols-2 ml-4 ">
          <div className="mt-4">
            <div className="text-4xl font-light">{stats.total_bags}</div>
            <div className="text-lg">TOTAL BAGS</div>
          </div>
          <div className="mt-4">
            <div className="text-4xl font-light">{stats.tip_vs_bags}%</div>
            <div className="text-lg">TIP VS BAGS</div>
          </div>
        </div>
      </div>
      <div className="p-4 rounded col-span-2">
        <div className="flex items-center mb-8">
          <div className="flex-1 border-t border-blue-500"></div>
          <span className="px-4 text-blue-500 text-center font-light uppercase tracking-wide text-lg">Tip Stats</span>
          <div className="flex-1 border-t border-blue-500"></div>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-4">
          { [
            { label: 'TOTAL TIPS', value: stats.total_tips },
            { label: 'HIT TIPS', value: stats.hit_tips },
            { label: 'MISS TIPS', value: stats.miss_tips },
            { label: 'ABANDONED TIPS', value: stats.abandoned_tips },
            { label: 'GUN TIPS', value: stats.gun_tips },
            { label: 'KNIFE TIPS', value: stats.knife_tips },
            { label: 'LED TIPS', value: stats.led_tips },
            { label: 'OTHER TIPS', value: stats.other_tips },
          ].map((tip, index) => (
            <div key={index} className="p-4 rounded">
              <div className="text-4xl font-light">{tip.value}</div>
              <div className="text-lg">{tip.label}</div>
            </div>
          )) }
        </div>
      </div>
    </div>
  );
}

export default Stats;