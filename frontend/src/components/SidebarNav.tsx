import React, { useState } from 'react';
import '../styles/SidebarNav.css';
import { MdOutlineSettings } from "react-icons/md";
import { BsHouse} from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { FiLogOut } from 'react-icons/fi';
import logo from '../assets/logo.png';

interface SidebarProps {
  darkMode: boolean;
}

const SidebarNav: React.FC<SidebarProps> = ({ darkMode }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => setCollapsed(!collapsed);

  const sidebarClass = `sidebar ${collapsed ? 'collapsed' : ''} ${darkMode ? 'dark' : 'light'}`;

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

        toggleSidebar();
      }}
    >
      <div className="top">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-img" />
          {!collapsed && <span className="company-name">Datawise</span>}
        </div>
      </div>

      <nav className="nav">
        <ul>
          <li className="active">
            <BsHouse className="icon" />
            {!collapsed && <span>Dashboard</span>}
          </li>
          <li>
            <BiUser className="icon" />
            {!collapsed && <span>Users</span>}
          </li>
          <li>
            <MdOutlineSettings className="icon" />
            {!collapsed && <span>Settings</span>}
          </li>
        </ul>
      </nav>

      <div className="bottom">
        <button className="theme-toggle" onClick={handleLogout}>
          <FiLogOut className="icon" />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default SidebarNav;
