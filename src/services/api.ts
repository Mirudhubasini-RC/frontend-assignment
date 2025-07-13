import axios from 'axios';

const API_BASE_MAIN = process.env.REACT_APP_API_BASE_MAIN as string;
const API_BASE_ACTIVITY = process.env.REACT_APP_API_BASE_ACTIVITY as string;

console.log("MAIN:", process.env.REACT_APP_API_BASE_MAIN);
console.log("ACTIVITY:", process.env.REACT_APP_API_BASE_ACTIVITY);


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