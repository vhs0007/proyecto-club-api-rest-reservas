import axios, { AxiosHeaders } from "axios";
import * as dotenv from "dotenv";

dotenv.config();

const HARDCODED_BEARER_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjAsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzc2ODc3Njc2LCJleHAiOjE3NzY5NjQwNzZ9.ybkWYDD6rcEFdxLUyFTJZXM3UcCZ_1o9jk2_H42btts";

export const AxiosInstance = axios.create({
    baseURL: process.env.API_URL ?? '',
    headers: {
        'Content-Type': 'application/json',
    }
});

AxiosInstance.interceptors.request.use((config) => {
    const headers = AxiosHeaders.from(config.headers ?? {});
    headers.set("Authorization", `Bearer ${HARDCODED_BEARER_TOKEN}`);
    config.headers = headers;
    return config;
});
