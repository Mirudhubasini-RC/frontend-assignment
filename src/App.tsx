import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Settings from './pages/Settings';
import SidebarNav from './components/SidebarNav';

const App: React.FC = () => {
  return (
    <Router>
      {/* Wrap everything in a flex container */}
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <SidebarNav />
        <div style={{ flex: 1, padding: '2rem' }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
