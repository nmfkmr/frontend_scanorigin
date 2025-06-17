import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './Layout.jsx'
import Stats from './components/Stats.jsx'
import './index.css'
import MatrixPage from './components/Matrix/MatrixPage';
import StationMapping from './components/Matrix/StationMapping';
import FollowOnActions from './components/Matrix/FollowOnActions';
import OperatorAlarmSettings from './components/Matrix/OperatorAlarmSettings.jsx'
import DecisionSettings from './components/Matrix/DecisionSettings.jsx'
import DashboardSettings from './components/Matrix/DashboardSettings.jsx'
import RealTimeStatus from './components/Matrix/RealTimeStatus.jsx'
import FindBag from './components/Matrix/FindBag.jsx'
import Operators from './components/Matrix/Operators.jsx'
import Scanners from './components/Matrix/Scanners.jsx'
import QueueStatus from './components/Matrix/QueueStatus.jsx'
import ErrorMessages from './components/Matrix/ErrorMessages.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div style={{ background: "#000", minHeight: "100vh" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/matrix/follow-on-actions" />} />
            <Route path="matrix" element={<MatrixPage />}>
              <Route path="station-mapping" element={<StationMapping />} />
              <Route path="follow-on-actions" element={<FollowOnActions />} />
              <Route path="alarm-settings" element={<OperatorAlarmSettings />} />
              <Route path="decision-settings" element={<DecisionSettings />} />
              <Route path="dashboard-settings" element={<DashboardSettings />} />
              <Route path="error-messages" element={<ErrorMessages />} />
              <Route path="find-bag" element={<FindBag />} />
              <Route path="operators" element={<Operators />} />
              <Route path="scanners" element={<Scanners />} />
              <Route path="queue-status" element={<QueueStatus />} />
              <Route path="real-time-status" element={<RealTimeStatus/>} />
            </Route>
            <Route path="stats" element={<Stats />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>,
)
