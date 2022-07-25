// Axios
import { axiosInstance, axiosInstanceWithValidation } from '../utils/axios';

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

export function validateTokenApi () {
  return axiosInstanceWithValidation.get('/login/validate-token');
}