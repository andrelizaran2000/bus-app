import axios from 'axios';

const URL = "http://localhost:4000"

export const axiosInstance = axios.create({ baseURL:URL });

export var axiosInstanceWithValidation = axios.create({ baseURL:URL });

axiosInstanceWithValidation.interceptors.request.use((config) => {
  const token = localStorage.getItem('bus-token') || ' ';
  if (config.headers === undefined) config.headers = {};
  config.headers.authorization = `Bearer ${token}`
  return config;
});