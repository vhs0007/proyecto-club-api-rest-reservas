import { CreateReservationDto } from '../dto/request/create-reservation.dto';
import { UpdateReservationDto } from '../dto/request/update-reservation.dto';
import { ReservationResponseDto } from '../dto/response/reservation.response.dto';
import { QueryReservationRequestDto } from '../dto/request/query-reservation.request.dto';

export interface ReservationsDataSource {
  createReservation(data: CreateReservationDto): Promise<ReservationResponseDto>;
  getReservations(clubId: number): Promise<ReservationResponseDto[]>;
  getReservationById(query: QueryReservationRequestDto): Promise<ReservationResponseDto>;
  updateReservation(
    query: QueryReservationRequestDto,
    updateReservationDto: UpdateReservationDto,
  ): Promise<ReservationResponseDto>;
  deleteReservation(query: QueryReservationRequestDto): Promise<void>;
}
