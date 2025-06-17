import React, { useState } from "react";
import MatrixSidebar from "./MatrixSidebar";
import { Outlet } from "react-router-dom";

export default function MatrixPage() {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  
  return (
    <div className="flex min-h-[80vh]">
      {sidebarVisible && <MatrixSidebar />}
      <div className="flex-1 p-8 relative">
        {/* Toggle Sidebar Button */}
        <button
          className="absolute top-0 left-0 z-10 bg-blue-500 text-white font-semibold px-2 py-1 rounded hover:bg-blue-600"
          onClick={() => setSidebarVisible((v) => !v)}
        >
          {sidebarVisible ? "<" : ">"}
        </button>
        <div className={sidebarVisible ? "ml-0" : ""}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

