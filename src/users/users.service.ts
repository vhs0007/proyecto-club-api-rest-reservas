import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/request/create-user.request.dto';
import { UpdateUserDto } from './dto/request/update-user.request.dto';
import { UsersDataSourceImpl } from './data/users.datasource.impl';
import { QueryUserRequestDto } from './dto/request/query-user.request.dto';


@Injectable()
export class UsersService {
  constructor(
    private readonly usersDataSource: UsersDataSourceImpl,
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.usersDataSource.createUser(createUserDto);
  }

  findAll(clubId: number) {
    return this.usersDataSource.getUsers(clubId);
  }

  findOne(payload: QueryUserRequestDto) {
    return this.usersDataSource.getUserById(payload);
  }

  update(payload: QueryUserRequestDto, updateUserDto: UpdateUserDto) {
    return this.usersDataSource.updateUser(
      payload,
      updateUserDto,
    );
  }

  remove(payload: QueryUserRequestDto) {
    return this.usersDataSource.deleteUser(payload);
  }
}
