import axios from 'axios';

const URL = "http://localhost:4000"

export const axiosInstance = axios.create({ baseURL:URL });