// src/pages/Dashboard.tsx
import React from 'react';
import '../styles/Dashboard.css';
import BarChartComponent from '../components/BarChartComponent'; 
import FormComponent from '../components/FormComponent';
import UserActivityComp from '../components/UserActivityComp'; // 👈 Import the table

interface DashboardProps {
  darkMode: boolean;
  isSidebarCollapsed: boolean;
}

const Dashboard: React.FC<DashboardProps> = ({ darkMode, isSidebarCollapsed }) => {
  const dashboardClass = `dashboard-container ${darkMode ? 'dark' : 'light'} ${isSidebarCollapsed ? 'collapsed' : 'expanded'}`;
  
  return (
    <div className={dashboardClass}>
      {/* Top: Flex row (Chart + Form) */}
      <div className="dashboard-content-flex-container">
        <div className="chart-wrapper-left">
          <BarChartComponent darkMode={darkMode} />
        </div>

        <div className="form-field-area">
          <FormComponent darkMode={darkMode} />
        </div>
      </div>

      {/* Bottom: Full-width User Activity Table */}
      <div className="user-activity-table-area">
        <UserActivityComp darkMode={darkMode} />
      </div>
    </div>
  );
};

export default Dashboard;
