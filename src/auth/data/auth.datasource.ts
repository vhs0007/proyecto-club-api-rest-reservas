import { LoginRequestDto } from "../dto/request/login-request.dto";
import { LoginResponse } from "../dto/response/loign-response.dto";

export interface AuthDataSource {
  login(payload: LoginRequestDto): Promise<LoginResponse>;
}