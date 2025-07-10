import React, { useState, useEffect } from 'react';
import './Topbar.css'; // Optional if using CSS
import { FaMoon, FaSun } from 'react-icons/fa';

interface TopbarProps {
  title: string;
  userName: string;
  userImageUrl?: string;
  onThemeToggle?: () => void;
}

const Topbar: React.FC<TopbarProps> = ({ title, userName, userImageUrl, onThemeToggle }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
    const sidebar = document.querySelector('.sidebar');
    const topbar = document.querySelector('.topbar');
    if (sidebar) sidebar.classList.toggle('dark', darkMode);
    if (topbar) topbar.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
    onThemeToggle?.();
  };

  return (
    <header className="topbar">
      <div className="title">{title}</div>

      <div className="user-section">
        <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle Theme">
          {darkMode ? <FaSun /> : <FaMoon />}
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

