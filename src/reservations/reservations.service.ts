import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/request/create-reservation.dto';
import { UpdateReservationDto } from './dto/request/update-reservation.dto';
import { ReservationsDataSourceImpl } from './data/reservations.datasource.impl';
import { ReservationResponseDto } from './dto/response/reservation.response.dto';
import { QueryReservationRequestDto } from './dto/request/query-reservation.request.dto';

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

  findOne(query: QueryReservationRequestDto): Promise<ReservationResponseDto> {
    return this.reservationsDataSource.getReservationById(query);
  }

  update(
    query: QueryReservationRequestDto,
    updateReservationDto: UpdateReservationDto,
  ): Promise<ReservationResponseDto> {
    return this.reservationsDataSource.updateReservation(
      query,
      updateReservationDto,
    );
  }

  remove(query: QueryReservationRequestDto): Promise<void> {
    return this.reservationsDataSource.deleteReservation(query);
  }
}
