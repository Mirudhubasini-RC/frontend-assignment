// src/pages/Users.tsx
import React from 'react';

// Define the props interface for the Users component
interface UsersProps {
  darkMode: boolean; // Add this line
}

// Update the component to accept the darkMode prop
const Users: React.FC<UsersProps> = ({ darkMode }) => {
  // You can use the darkMode prop here if needed for Users page specific styling
  const usersClass = `users-page ${darkMode ? 'dark' : 'light'}`; // Example of using it
  return (
    <div className={usersClass}> {/* Apply the class */}
      <h2>Users Page</h2>
      {/* Your user management content will go here */}
    </div>
  );
};

export default Users;