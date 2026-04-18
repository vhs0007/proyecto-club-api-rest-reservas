import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { LoginRequestDto } from './dto/request/login-request.dto';
import { LoginResponse } from './dto/response/loign-response.dto';
import { AuthDataSourceImpl } from './data/auth.datasource.impl';

@Injectable()
export class AuthService {

    constructor(private readonly authDataSource: AuthDataSourceImpl) {
        this.authDataSource = authDataSource;
    }

    authenticateUser(payload: LoginRequestDto): Promise<LoginResponse> {
        try {
            return this.authDataSource.login(payload);
        } catch (error) {
            console.error('Error in authenticateUser:', error);
            throw new InternalServerErrorException(error);
        }
    }
}
