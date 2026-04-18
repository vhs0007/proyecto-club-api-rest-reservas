import { Injectable } from "@nestjs/common";
import { LoginRequestDto } from "../dto/request/login-request.dto";
import { LoginResponse } from "../dto/response/loign-response.dto";
import { AxiosInstance } from "../../configs/axios/api.config";
import { AuthDataSource } from "./auth.datasource";

@Injectable()
export class AuthDataSourceImpl implements AuthDataSource {
    api = AxiosInstance;

    async login(payload: LoginRequestDto): Promise<LoginResponse> {
    try {
        const rawCall = (await this.api.post('/auth/login', payload));
        if(rawCall.status !== 201) {
            throw new Error(`Error logging in: ${rawCall.statusText}`);
        }
        const response: LoginResponse = rawCall.data;
        return response;
    } catch (error) {
        console.error('Error in login:', error);
        throw error;
    }
}
}