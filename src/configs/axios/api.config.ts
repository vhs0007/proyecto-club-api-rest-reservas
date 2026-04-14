import axios, {AxiosError, AxiosHeaders} from "axios";
import * as dotenv from "dotenv";

dotenv.config();

const AxiosInstance = axios.create({
    baseURL: process.env.API_URL ?? '',
    headers: {
        'Content-Type': 'application/json',
    }
});

