// src/components/UserActivityComp.tsx

import React, { useEffect, useState } from 'react';
import { fetchUserActivity } from '../services/api';
import '../styles/UserActivityComp.css';

interface UserActivity {
  id: string;
  name: string;
  email: string;
  role: string;
  apiName: string;
  timestamp: string;
}

interface Props {
  darkMode: boolean;
}

const UserActivityComp: React.FC<Props> = ({ darkMode }) => {
  const [activityData, setActivityData] = useState<UserActivity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchUserActivity();
        setActivityData(res.data);
      } catch (err) {
        console.error("Error fetching user activity:", err);
        setError('Failed to load user activity.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={`activity-wrapper ${darkMode ? 'dark' : 'light'}`}>
      <h3 className="table-title">Recent User Activity</h3>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="error-text">{error}</p>
      ) : (
        <div className="activity-table-wrapper">
          <table className="activity-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>API Accessed</th>
                <th>Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {activityData.map((activity) => (
                <tr key={activity.id}>
                  <td>{activity.name}</td>
                  <td>{activity.email}</td>
                  <td>{activity.role}</td>
                  <td>{activity.apiName}</td>
                  <td>{new Date(activity.timestamp).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UserActivityComp;
