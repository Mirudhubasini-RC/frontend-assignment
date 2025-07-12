import React, { useState, useEffect } from 'react';
import '../styles/Users.css';
import { fetchUsers } from '../services/api'; // ✅ import the new function

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar: string;
}

interface UsersProps {
  darkMode: boolean;
  isSidebarCollapsed: boolean;
}

const Users: React.FC<UsersProps> = ({ darkMode, isSidebarCollapsed }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const usersClass = `users-container ${darkMode ? 'dark' : 'light'} ${isSidebarCollapsed ? 'collapsed' : 'expanded'}`;

  useEffect(() => {
    fetchUsers()
      .then(res => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch users.');
        setLoading(false);
      });
  }, []);

  return (
    <div className={usersClass}>
      <h2 className="users-title">Users</h2>
      {loading && <p>Loading users...</p>}
      {error && <p className="error-text">{error}</p>}
      {!loading && !error && (
        <div className="users-table-wrapper">
          <table className="users-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td className="user-info-cell">
                    <img src={user.avatar} alt={user.name} className="user-avatar-img" />
                    <span>{user.name}</span>
                  </td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Users;
