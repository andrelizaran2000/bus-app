// Axios
import { axiosInstance } from '../utils/axios';

export type LoginApiPayload = {
  userName:string;
  password:string;
}

export type LoginApiResponse = {
  token:string;
}

export function loginApi (payload:LoginApiPayload) {
  return axiosInstance.post<LoginApiResponse>('/login', payload);
}