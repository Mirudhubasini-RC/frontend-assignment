// src/pages/Dashboard.tsx
import React from 'react';
import '../styles/Dashboard.css';
import BarChartComponent from '../components/BarChartComponent'; 
import FormComponent from '../components/FormComponent';

interface DashboardProps {
  darkMode: boolean;
}

const Dashboard: React.FC<DashboardProps> = ({ darkMode }) => {
  const dashboardClass = `dashboard-container ${darkMode ? 'dark' : 'light'}`;

  return (
    <div className={dashboardClass}>
      {/* New flex container for side-by-side layout */}
      <div className="dashboard-content-flex-container">
        {/* Left side: Bar Chart Component */}
        <div className="chart-wrapper-left">
          <BarChartComponent darkMode={darkMode} />
        </div>

        {/* Right side: Placeholder for Form Component */}
        <div className="form-field-area">
          <FormComponent darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
