import React, { useState } from 'react';
import '../styles/SidebarNav.css';
import { FaHome, FaUser, FaCog, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { BsSun, BsMoon } from 'react-icons/bs';
import logo from '../assets/logo.png';


const SidebarNav: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleSidebar = () => setCollapsed(!collapsed);
  const toggleTheme = () => setDarkMode(!darkMode);

  const sidebarClass = `sidebar ${collapsed ? 'collapsed' : ''} ${darkMode ? 'dark' : 'light'}`;

  return (
    <div className={sidebarClass}>
      <div className="top">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-img" />
            {!collapsed && <span className="company-name">  Datawise</span>}
            <button className="collapse-toggle" onClick={toggleSidebar}>
            {collapsed ? <FaChevronRight /> : <FaChevronLeft />}
        </button>
        </div>
      </div>

      <nav className="nav">
        <ul>
          <li className="active">
            <FaHome className="icon glow" />
            {!collapsed && <span>Dashboard</span>}
          </li>
          <li>
            <FaUser className="icon glow" />
            {!collapsed && <span>Users</span>}
          </li>
          <li>
            <FaCog className="icon glow" />
            {!collapsed && <span>Settings</span>}
          </li>
        </ul>
      </nav>

      <div className="bottom">
        <button className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? <BsSun /> : <BsMoon />}
          {!collapsed && <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>}
        </button>
      </div>
    </div>
  );
};

export default SidebarNav;


