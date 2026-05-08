import axios, { AxiosHeaders } from 'axios';
import * as dotenv from 'dotenv';
import { getToken } from '../auth-context/auth-context';

dotenv.config();

export const AxiosInstance = axios.create({
  baseURL: process.env.API_URL ?? '',
  headers: {
    'Content-Type': 'application/json',
  },
});

AxiosInstance.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    const headers = AxiosHeaders.from(config.headers ?? {});
    headers.set('Authorization', `Bearer ${token}`);
    config.headers = headers;
  }
  return config;
});
