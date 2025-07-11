import axios from 'axios';

const API_BASE = 'https://6870b5d37ca4d06b34b7a733.mockapi.io';


export const fetchYearlyUsage = () => {
  return axios.get(`${API_BASE}/barchart/api-usage`);
};

export const submitUserData = (data: {
  apiName: string;
  accessLevel: string;
  justification: string;
}) => {
  return axios.post(`${API_BASE}/request_api`, data);
};
