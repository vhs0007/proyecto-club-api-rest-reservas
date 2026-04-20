import { CreateReservationDto } from '../dto/create-reservation.dto';
import { UpdateReservationDto } from '../dto/update-reservation.dto';
import { ReservationResponseDto } from '../dto/response/reservation.response.dto';

export interface ReservationsDataSource {
  createReservation(data: CreateReservationDto): Promise<ReservationResponseDto>;
  getReservations(clubId: number): Promise<ReservationResponseDto[]>;
  getReservationById(id: number, clubId: number): Promise<ReservationResponseDto>;
  updateReservation(
    id: number,
    data: UpdateReservationDto,
  ): Promise<ReservationResponseDto>;
  deleteReservation(id: number): Promise<void>;
}
