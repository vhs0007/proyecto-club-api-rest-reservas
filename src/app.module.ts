import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReservationsModule } from './reservations/reservations.module';
import { AuthModule } from './auth/auth.module';
import { FacilitiesModule } from './facilities/facilities.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ReservationsModule, AuthModule, FacilitiesModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
