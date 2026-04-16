import { UserResponseDto } from "../dto/response/user.response.dto";
import { QueryUserRequestDto } from "../dto/request/query-user.request.dto";
import { CreateUserDto } from "../dto/request/create-user.request.dto";
import { UpdateUserDto } from "../dto/request/update-user.request.dto";
import { User } from "../entities/user.entity";

export interface UsersDataSource {
  getUsers(clubId: number): Promise<UserResponseDto[]>;
  getUserById(payload: QueryUserRequestDto): Promise<UserResponseDto>;
  createUser(userData: CreateUserDto): Promise<UserResponseDto>;
  updateUser(payload: QueryUserRequestDto, userData: UpdateUserDto): Promise<UserResponseDto>;
  deleteUser(payload: QueryUserRequestDto): Promise<UserResponseDto>;
}