// src/components/FormComponent.tsx
import React, { useState } from 'react';
import { submitUserData } from '../services/api';
import '../styles/FormComponent.css';

interface FormComponentProps {
  darkMode: boolean;
}

const FormComponent: React.FC<FormComponentProps> = ({ darkMode }) => {
  const [apiName, setApiName] = useState('');
  const [accessLevel, setAccessLevel] = useState('');
  const [justification, setJustification] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!apiName || !accessLevel || !justification) {
      setError('All fields are required.');
      setMessage('');
      return;
    }

    const formData = {
      apiName,
      accessLevel,
      justification,
    };

    try {
      await submitUserData(formData);
      setMessage('API Access Request submitted successfully!');
      setError('');
      setApiName('');
      setAccessLevel('');
      setJustification('');
    } catch (err: any) {
      console.error('Submission error:', err);
      setMessage('');
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError('Submission failed. Please try again later.');
      }
    }
  };

  return (
    <div className={`form-container ${darkMode ? 'dark' : 'light'}`}>
      <h3>API Access Request</h3>
      <form onSubmit={handleSubmit} className="form-fields">
        <select
          value={apiName}
          onChange={(e) => setApiName(e.target.value)}
          required
        >
          <option value="">Select API</option>
          <option value="Sales Analytics">Sales Analytics</option>
          <option value="User Engagement">User Engagement</option>
          <option value="Customer Feedback">Customer Feedback</option>
        </select>

        <select
          value={accessLevel}
          onChange={(e) => setAccessLevel(e.target.value)}
          required
        >
          <option value="">Select Access Level</option>
          <option value="Read">Read</option>
          <option value="Write">Write</option>
          <option value="Admin">Admin</option>
        </select>

        <textarea
          placeholder="Justification"
          value={justification}
          onChange={(e) => setJustification(e.target.value)}
          rows={4}
          required
        />

        <button type="submit">Submit</button>
      </form>

      {error && <p className="form-error">{error}</p>}
      {message && <p className="form-message">{message}</p>}
    </div>
  );
};

export default FormComponent;
