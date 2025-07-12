import axios from 'axios';

// (API Usage + Form)
const API_BASE_MAIN = 'https://6870b5d37ca4d06b34b7a733.mockapi.io';

// (User Activity) Used from different email since I lost free trail in first.
const API_BASE_ACTIVITY = 'https://6870f5337ca4d06b34b8c9fe.mockapi.io';

// GET: Bar chart usage data
export const fetchYearlyUsage = () => {
  return axios.get(`${API_BASE_MAIN}/barchart/api-usage`);
};

// POST: Submit API access request
export const submitUserData = (data: {
  apiName: string;
  accessLevel: string;
  justification: string;
}) => {
  return axios.post(`${API_BASE_MAIN}/request_api`, data);
};

// GET: Fetch user activity data
export const fetchUserActivity = () => {
  return axios.get(`${API_BASE_ACTIVITY}/users/activity`);
};

// GET: Fetch cartoon-style user list
export const fetchUsers = () => {
  return axios.get(`${API_BASE_ACTIVITY}/users/users`);
};