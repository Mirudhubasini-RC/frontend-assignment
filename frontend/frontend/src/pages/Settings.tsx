// src/pages/Settings.tsx
import React from 'react';

// Define the props interface for the Settings component
interface SettingsProps {
  darkMode: boolean; // Add this line
}

// Update the component to accept the darkMode prop
const Settings: React.FC<SettingsProps> = ({ darkMode }) => {
  // You can use the darkMode prop here if needed for Settings page specific styling
  const settingsClass = `settings-page ${darkMode ? 'dark' : 'light'}`; // Example of using it
  return (
    <div className={settingsClass}> {/* Apply the class */}
      <h2>Settings Page</h2>
      {/* Your settings content will go here */}
    </div>
  );
};

export default Settings;