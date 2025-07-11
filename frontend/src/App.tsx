import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Settings from './pages/Settings';
import SidebarNav from './components/SidebarNav';
import Topbar from './components/Topbar';
import myUserAvatar from './assets/user_avatar.webp'; 

const AppContent: React.FC<{
  darkMode: boolean;
  toggleTheme: () => void;
}> = ({ darkMode, toggleTheme }) => {
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case '/users':
        return 'Users';
      case '/settings':
        return 'Settings';
      default:
        return 'Dashboard';
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <SidebarNav darkMode={darkMode} />
      <div style={{ flex: 1 }}>
        <Topbar
          title={getTitle()}
          userName="Mirudhu"
          userImageUrl={myUserAvatar} 
          darkMode={darkMode}
          onThemeToggle={toggleTheme}
        />
        <div style={{ padding: '0.2rem' }}>
          <Routes>
            <Route path="/" element={<Dashboard darkMode={darkMode}/>} />
            <Route path="/users" element={<Users darkMode={darkMode} />} />
            <Route path="/settings" element={<Settings darkMode={darkMode} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <Router>
      <AppContent darkMode={darkMode} toggleTheme={toggleTheme} />
    </Router>
  );
};

export default App;