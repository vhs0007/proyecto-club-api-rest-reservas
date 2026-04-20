import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { ReservationsDataSourceImpl } from './data/reservations.datasource.impl';
import { ReservationResponseDto } from './dto/response/reservation.response.dto';

@Injectable()
export class ReservationsService {
  constructor(
    private readonly reservationsDataSource: ReservationsDataSourceImpl,
  ) {}

  create(
    createReservationDto: CreateReservationDto,
  ): Promise<ReservationResponseDto> {
    return this.reservationsDataSource.createReservation(createReservationDto);
  }

  findAll(clubId: number): Promise<ReservationResponseDto[]> {
    return this.reservationsDataSource.getReservations(clubId);
  }

  findOne(id: number, clubId: number): Promise<ReservationResponseDto> {
    return this.reservationsDataSource.getReservationById(id, clubId);
  }

  update(
    id: number,
    updateReservationDto: UpdateReservationDto,
  ): Promise<ReservationResponseDto> {
    return this.reservationsDataSource.updateReservation(
      id,
      updateReservationDto,
    );
  }

  remove(id: number): Promise<void> {
    return this.reservationsDataSource.deleteReservation(id);
  }
}
