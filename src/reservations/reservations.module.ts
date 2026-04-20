import { Module } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { ReservationsController } from './reservations.controller';
import { ReservationsDataSourceImpl } from './data/reservations.datasource.impl';

@Module({
  controllers: [ReservationsController],
  providers: [ReservationsService, ReservationsDataSourceImpl],
})
export class ReservationsModule {}
