import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Buttons() {
  const [activeButton, setActiveButton] = useState('User');
  const navigate = useNavigate();

  // Each button has its own route (currently all set to /settings)
  const buttonRoutes = {
    User: '/stats',
    Log: '/stats',
    Settings: '/settings',
  };

  const buttons = Object.keys(buttonRoutes);

  const handleClick = (button) => {
    setActiveButton(button);
    navigate(buttonRoutes[button]);
  };

  return (
    <div className="inline-flex border border-blue-500 rounded mb-6 overflow-hidden">
      {buttons.map((button, idx) => (
        <button
          key={button}
          className={`px-6 py-3 text-white uppercase tracking-wide outline-none transition-colors duration-200
            ${activeButton === button ? 'bg-blue-500' : 'bg-black'}
            ${idx !== buttons.length - 1 ? 'border-r border-blue-500' : ''}
          `}
          onClick={() => handleClick(button)}
        >
          {button}
        </button>
      ))}
    </div>
  );
}

export default Buttons;
