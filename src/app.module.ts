import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReservationsModule } from './reservations/reservations.module';
import { AuthModule } from './auth/auth.module';
import { FacilitiesModule } from './facilities/facilities.module';
import { UsersModule } from './users/users.module';
import { MembershipTypeModule } from './membership-type/membership-type.module';
import { AuthContextMiddleware } from './configs/auth-context/auth.middleware';

@Module({
  imports: [
    ReservationsModule,
    AuthModule,
    FacilitiesModule,
    UsersModule,
    MembershipTypeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthContextMiddleware).forRoutes('*');
  }
}
