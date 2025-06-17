import { NavLink } from "react-router-dom";

export default function MatrixSidebar() {
  return (
    <div className="w-64 bg-gray-900 border-r border-blue-500 min-h-full py-8 px-4">
      <nav className="flex flex-col gap-4">
        <NavLink to="/matrix/real-time-status" className={({isActive}) => isActive ? "text-blue-400 font-bold" : "text-white"}>
        Real Time Status
        </NavLink>
        <NavLink to="/matrix/queue-status" className={({isActive}) => isActive ? "text-blue-400 font-bold" : "text-white"}>
        Queue Status
        </NavLink>
        <NavLink to="/matrix/scanners" className={({isActive}) => isActive ? "text-blue-400 font-bold" : "text-white"}>
        Scanners
        </NavLink>
        <NavLink to="/matrix/find-bag" className={({isActive}) => isActive ? "text-blue-400 font-bold" : "text-white"}>
        Find Bag
        </NavLink>
        <NavLink to="/matrix/error-messages" className={({isActive}) => isActive ? "text-blue-400 font-bold" : "text-white"}>
        Error Messages
        </NavLink>
        <NavLink to="/matrix/dashboard-settings" className={({isActive}) => isActive ? "text-blue-400 font-bold" : "text-white"}>
        Dashboard Settings
        </NavLink>
        <NavLink to="/matrix/decision-settings" className={({isActive}) => isActive ? "text-blue-400 font-bold" : "text-white"}>
        Decision Settings
        </NavLink>
        <NavLink to="/matrix/alarm-settings" className={({isActive}) => isActive ? "text-blue-400 font-bold" : "text-white"}>
        Operator Alarm Settings
        </NavLink>
        <NavLink to="/matrix/station-mapping" className={({isActive}) => isActive ? "text-blue-400 font-bold" : "text-white"}>
          Station Mapping
        </NavLink>
        <NavLink to="/matrix/follow-on-actions" className={({isActive}) => isActive ? "text-blue-400 font-bold" : "text-white"}>
          Follow-On Actions
        </NavLink>
      </nav>
    </div>
  );
}