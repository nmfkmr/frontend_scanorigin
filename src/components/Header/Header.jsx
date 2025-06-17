import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  // Map buttons to their routes
  const buttonRoutes = {
    User: '/stats', // Change this line
    Log: '/stats',
    Matrix: '/matrix/follow-on-actions', // Default Matrix page
  };

  const buttons = Object.keys(buttonRoutes);

  // Determine active button based on current path
  const activeButton = buttons.find(
    (button) => location.pathname.startsWith(buttonRoutes[button].replace('/follow-on-actions', ''))
  ) || 'User';

  const handleClick = (button) => {
    navigate(buttonRoutes[button]);
  };

  return (
    <div className="px-8 py-4 bg-black">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl text-blue-500">ScanORIGIN</h1>
        {/* Menu Button */}
        <button
          className="p-2 rounded hover:bg-blue-100"
          aria-label="Open menu"
          onClick={() => alert('Menu clicked!')}
        >
          <div className="grid grid-cols-3 gap-0.5 w-6 h-6">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-blue-500"></div>
            ))}
          </div>
        </button>
      </div>
      {/* Buttons below the logo */}
      <div className="flex items-center gap-4 mt-4">
        <div className="inline-flex border border-blue-500 rounded mb-0 overflow-hidden">
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
      </div>
    </div>
  );
}

export default Header;
