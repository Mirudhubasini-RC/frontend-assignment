// src/components/FormComponent.tsx
import React, { useState } from 'react';
import { submitUserData } from '../services/api';
import '../styles/FormComponent.css';

interface FormComponentProps {
  darkMode: boolean;
}

const FormComponent: React.FC<FormComponentProps> = ({ darkMode }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState(''); // 'Admin' or 'User'
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation before submission
    if (!name || !email || !role) {
      setError('All fields are required.');
      setMessage('');
      return;
    }

    if (!['Admin', 'User'].includes(role)) {
      setError('Role must be either Admin or User.');
      setMessage('');
      return;
    }

    const formData = { name, email, role };

    try {
      await submitUserData(formData);
      setMessage('User created successfully!');
      setError('');
      setName('');
      setEmail('');
      setRole('');
    } catch (err: any) {
      console.error('Submission error:', err);
      setMessage('');
      if (err.response?.data?.message) {
        setError(err.response.data.message); // Server-sent message
      } else {
        setError('Failed to create user. Please try again later.');
      }
    }
  };

  return (
    <div className={`form-container ${darkMode ? 'dark' : 'light'}`}>
      <h3>Create New User</h3>
      <form onSubmit={handleSubmit} className="form-fields">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        >
          <option value="">Select Role</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select>

        <button type="submit">Submit</button>
      </form>

      {error && <p className="form-error">{error}</p>}
      {message && <p className="form-message">{message}</p>}
    </div>
  );
};

export default FormComponent;
