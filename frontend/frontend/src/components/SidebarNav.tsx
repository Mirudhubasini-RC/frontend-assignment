// src/components/SidebarNav.tsx

import React from 'react';
import '../styles/SidebarNav.css';
import { MdOutlineSettings } from "react-icons/md";
import { BsHouse } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { FiLogOut } from 'react-icons/fi';
import logo from '../assets/logo.png';

interface SidebarProps {
  darkMode: boolean;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

const SidebarNav: React.FC<SidebarProps> = ({ darkMode, isCollapsed, onToggleCollapse }) => {
  const sidebarClass = `sidebar ${isCollapsed ? 'collapsed' : ''} ${darkMode ? 'dark' : 'light'}`;

  const handleLogout = () => {
    console.log('User logged out');
  };

  return (
    <div
      className={sidebarClass}
      onClick={(e) => {
        const target = e.target as HTMLElement;

        if (
          target.closest('.nav') ||
          target.closest('.logo') ||
          target.closest('.theme-toggle')
        ) {
          return;
        }

        onToggleCollapse(); // call prop function to toggle
      }}
    >
      <div className="top">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-img" />
          {!isCollapsed && <span className="company-name">Datawise</span>}
        </div>
      </div>

      <nav className="nav">
        <ul>
          <li className="active">
            <BsHouse className="icon" />
            {!isCollapsed && <span>Dashboard</span>}
          </li>
          <li>
            <BiUser className="icon" />
            {!isCollapsed && <span>Users</span>}
          </li>
          <li>
            <MdOutlineSettings className="icon" />
            {!isCollapsed && <span>Settings</span>}
          </li>
        </ul>
      </nav>

      <div className="bottom">
        <button className="logout-button" onClick={handleLogout}>
          <FiLogOut className="icon" />
          {!isCollapsed && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default SidebarNav;
