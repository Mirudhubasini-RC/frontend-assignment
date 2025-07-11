// src/pages/Dashboard.tsx
import React from 'react';
import '../styles/Dashboard.css';
import BarChartComponent from '../components/BarChartComponent'; // Import the BarChartComponent

interface DashboardProps {
  darkMode: boolean;
}

const Dashboard: React.FC<DashboardProps> = ({ darkMode }) => {
  const dashboardClass = `dashboard-container ${darkMode ? 'dark' : 'light'}`;

  return (
    <div className={dashboardClass}>
 
      {/* New flex container for side-by-side layout - styles moved to Dashboard.css */}
      <div className="dashboard-content-flex-container"> {/* Applied new class */}
        {/* Left side: Bar Chart Component within its own glow window */}
        <div className="chart-wrapper-left"> {/* This div gets the styling and takes up left space */}
          <BarChartComponent darkMode={darkMode} />
        </div>

        {/* Right side: Placeholder for your form field */}
        <div className="form-field-area">
          {/* Your form elements will go here */}
          <h3>Form Section (Right Side)</h3>
          <p>This area is reserved for your form fields.</p>
          {/* Example form element */}
          <input type="text" placeholder="Enter data..." style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
