import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';
import { UsersDataSourceImpl } from './data/users.datasource.impl';
@Module({
  controllers: [UsersController],
  providers: [UsersService, UsersDataSourceImpl],
})
export class UsersModule {}
