import { AxiosInstance } from "../../configs/axios/api.config";
import { UserResponseDto } from "../dto/response/user.response.dto";
import { CreateUserDto } from "../dto/request/create-user.request.dto";
import { UsersDataSource } from "./users.datasource";
import { UpdateUserDto } from "../dto/request/update-user.request.dto";
import { QueryUserRequestDto } from "../dto/request/query-user.request.dto";

export class UsersDataSourceImpl implements UsersDataSource {
   api = AxiosInstance;

    async getUserById(payload: QueryUserRequestDto): Promise<UserResponseDto> {
        try {
            const { userId, clubId, typeId } = payload;
            const rawCall = await this.api.get(`/users/${userId}`, {
                params: { clubId, typeId },
            });
            if(rawCall.status !== 200) {
                throw new Error(`Error fetching user with id ${payload.userId}: ${rawCall.statusText}`);
            }
            const response: UserResponseDto = rawCall.data;
            return response;
        } catch (error) {
            console.error(`Error in getUserById for id ${payload.userId}:`, error);
            throw error;
        }
    }

    async createUser(userData: CreateUserDto): Promise<UserResponseDto> {
        try {
            const rawCall = (await this.api.post('/users', userData));
            if(rawCall.status !== 201) {
                throw new Error(`Error creating user: ${rawCall.statusText}`);
            }
            const response: UserResponseDto = rawCall.data;
            return response;
        } catch (error) {
            console.error('Error in createUser:', error);
            throw error;
        }
    }

    async updateUser(payload: QueryUserRequestDto, userData: UpdateUserDto): Promise<UserResponseDto> {
        try {
            const rawCall = (await this.api.patch(`/users/${payload.userId}`, userData));
            if(rawCall.status !== 200) {
                throw new Error(`Error updating user with id ${payload.userId}: ${rawCall.statusText}`);
            }
            const response: UserResponseDto = rawCall.data;
            return response;
        } catch (error) {
            console.error(`Error in updateUser for id ${payload.userId}:`, error);
            throw error;
        }
    }

}