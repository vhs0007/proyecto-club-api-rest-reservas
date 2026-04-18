import { UserResponseDto } from "../dto/response/user.response.dto";
import { QueryUserRequestDto } from "../dto/request/query-user.request.dto";
import { CreateUserDto } from "../dto/request/create-user.request.dto";
import { UpdateUserDto } from "../dto/request/update-user.request.dto";

export interface UsersDataSource {
  getUserById(payload: QueryUserRequestDto): Promise<UserResponseDto>;
  createUser(userData: CreateUserDto): Promise<UserResponseDto>;
  updateUser(payload: QueryUserRequestDto, userData: UpdateUserDto): Promise<UserResponseDto>;
}