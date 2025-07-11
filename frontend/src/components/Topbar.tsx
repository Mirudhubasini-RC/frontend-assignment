import React, { useState, useEffect } from 'react';
import '../styles/Topbar.css';
import { FaMoon } from 'react-icons/fa';
import { BsSun } from 'react-icons/bs';
import companyLogo from '../assets/logo.png'; 


interface TopbarProps {
  title: string;
  userName: string;
  userImageUrl?: string;
  onThemeToggle?: () => void;
  darkMode: boolean;
}

const Topbar: React.FC<TopbarProps> = ({ title, userName, userImageUrl, onThemeToggle }) => {
  const [internalDarkMode, setInternalDarkMode] = useState<boolean>(false);

  useEffect(() => {
    document.body.classList.toggle('dark', internalDarkMode);
    const sidebar = document.querySelector('.sidebar');
    const topbar = document.querySelector('.topbar');
    const mainContentWrapper = document.querySelector('.main-content-wrapper');

    if (sidebar) sidebar.classList.toggle('dark', internalDarkMode);
    if (topbar) topbar.classList.toggle('dark', internalDarkMode);
    if (mainContentWrapper) mainContentWrapper.classList.toggle('dark', internalDarkMode);
  }, [internalDarkMode]);

  const toggleTheme = () => {
    setInternalDarkMode(prev => !prev);
    onThemeToggle?.();
  };

  return (
    <header className={`topbar ${internalDarkMode ? 'dark' : 'light'}`}>
      <div className="title-section"> {/* Create a new div to hold logo and title */}
        <img
          src={companyLogo} // Use the imported logo image
          alt="Company Logo"
          className="topbar-logo-img" // New class for topbar logo
        />
        <div className="title">{title}</div>
      </div>

      <div className="user-section">
        <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle Theme">
          {internalDarkMode ? <BsSun /> : <FaMoon />}
        </button>
        <img
          src={userImageUrl || 'https://via.placeholder.com/40'}
          alt="User Profile"
          className="user-avatar"
        />
        <span className="user-name">{userName}</span>
      </div>
    </header>
  );
};

export default Topbar;