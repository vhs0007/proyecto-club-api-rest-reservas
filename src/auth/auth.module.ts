import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AuthDataSourceImpl } from './data/auth.datasource.impl';

@Module({
  controllers: [AuthController],
  providers: [AuthService, AuthDataSourceImpl],
})
export class AuthModule {}
