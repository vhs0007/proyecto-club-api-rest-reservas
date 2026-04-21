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
            const rawCall = await this.api.post('/auth/login', payload);
            if (rawCall.status < 200 || rawCall.status >= 300) {
                throw new Error(`Error logging in: ${rawCall.statusText}`);
            }
            const d = rawCall.data as Partial<LoginResponse>;
            return {
                accessToken: d.accessToken!,
                role: d.role!,
                clubId: d.clubId!,
                userId: d.userId,
                email: d.email,
                document: d.document,
                type: d.type,
            };
        } catch (error) {
            console.error('Error in login:', error);
            throw error;
        }
    }
}