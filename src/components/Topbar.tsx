import React, { useState, useEffect, useRef } from 'react';
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
  isSidebarCollapsed: boolean; 
}

const Topbar: React.FC<TopbarProps> = ({
  title,
  userName,
  userImageUrl,
  onThemeToggle,
  darkMode,
  isSidebarCollapsed
}) => {
  const [internalDarkMode, setInternalDarkMode] = useState<boolean>(false);
  const [showRole, setShowRole] = useState<boolean>(false);
  const roleRef = useRef<HTMLDivElement>(null); // For detecting outside click

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

  // Close role popup on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (roleRef.current && !roleRef.current.contains(e.target as Node)) {
        setShowRole(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header
      className={`topbar ${internalDarkMode ? 'dark' : 'light'} ${isSidebarCollapsed ? 'collapsed' : ''}`}
    >
      <div className="title-section">
        <img src={companyLogo} alt="Company Logo" className="topbar-logo-img" />
        <div className="title">{title}</div>
      </div>

      <div className="user-section">
        <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle Theme">
          {internalDarkMode ? <BsSun /> : <FaMoon />}
        </button>

        <div style={{ position: 'relative' }} ref={roleRef}>
          <img
            src={userImageUrl || 'https://via.placeholder.com/40'}
            alt="User Profile"
            className="user-avatar"
            onClick={() => setShowRole(prev => !prev)}
            style={{ cursor: 'pointer' }}
          />
          {showRole && (
            <div
              style={{
                position: 'absolute',
                top: '110%',
                right: 0,
                background: '#fff',
                border: '1px solid #ccc',
                borderRadius: '6px',
                padding: '4px 8px',
                fontSize: '0.8rem',
                whiteSpace: 'nowrap',
                boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                zIndex: 100
              }}
            >
              Admin
            </div>
          )}
        </div>

        <span className="user-name">{userName}</span>
      </div>
    </header>
  );
};

export default Topbar;
