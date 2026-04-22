import { AxiosInstance } from '../../configs/axios/api.config';
import { CreateReservationDto } from '../dto/request/create-reservation.dto';
import { QueryReservationRequestDto } from '../dto/request/query-reservation.request.dto';
import { UpdateReservationDto } from '../dto/request/update-reservation.dto';
import { ReservationResponseDto } from '../dto/response/reservation.response.dto';
import { ReservationsNavigation } from '../../navigation/reservations.navigation';
import { ReservationsDataSource } from './reservations.datasource';

export class ReservationsDataSourceImpl implements ReservationsDataSource {
  api = AxiosInstance;

  private toReservationResponseDto(
    reservation: ReservationsNavigation,
  ): ReservationResponseDto {
    return {
      ...reservation,
      userId: reservation.user?.id ?? 0,
      facilityId: reservation.facility?.id ?? 0,
      clubId: reservation.facility?.clubId ?? 0,
      userTypeId: reservation.user?.type?.id ?? 0,
    };
  }

  async createReservation(
    data: CreateReservationDto,
  ): Promise<ReservationResponseDto> {
    try {
      const rawCall = await this.api.post('/activities', data);
      if (rawCall.status !== 201) {
        throw new Error(`Error creating reservation: ${rawCall.statusText}`);
      }
      const response: ReservationsNavigation = rawCall.data;
      return this.toReservationResponseDto(response);
    } catch (error) {
      console.error('Error in createReservation:', error);
      throw error;
    }
  }

  async getReservations(clubId: number): Promise<ReservationResponseDto[]> {
    try {
      const rawCall = await this.api.get('/activities', {
        params: { clubId },
      });
      if (rawCall.status !== 200) {
        throw new Error(`Error fetching reservations: ${rawCall.statusText}`);
      }
      const response: ReservationsNavigation[] = rawCall.data;
      return response.map((reservation) =>
        this.toReservationResponseDto(reservation),
      );
    } catch (error) {
      console.error('Error in getReservations:', error);
      throw error;
    }
  }

  async getReservationById(
    query: QueryReservationRequestDto,
  ): Promise<ReservationResponseDto> {
    try {
      const { id, clubId } = query;
      const rawCall = await this.api.get(`/activities/${id}`, {
        params: { clubId },
      });
      if (rawCall.status !== 200) {
        throw new Error(
          `Error fetching reservation with id ${id}: ${rawCall.statusText}`,
        );
      }
      const response: ReservationsNavigation = rawCall.data;
      return this.toReservationResponseDto(response);
    } catch (error) {
      console.error(`Error in getReservationById for id ${query.id}:`, error);
      throw error;
    }
  }

  async updateReservation(
    query: QueryReservationRequestDto,
    data: UpdateReservationDto,
  ): Promise<ReservationResponseDto> {
    try {
      const { id, clubId } = query;
      const rawCall = await this.api.patch(`/activities/${id}`, data, {
        params: { clubId },
      });
      if (rawCall.status !== 200) {
        throw new Error(
          `Error updating reservation with id ${id}: ${rawCall.statusText}`,
        );
      }
      const response: ReservationsNavigation = rawCall.data;
      return this.toReservationResponseDto(response);
    } catch (error) {
      console.error(`Error in updateReservation for id ${query.id}:`, error);
      throw error;
    }
  }

  async deleteReservation(query: QueryReservationRequestDto): Promise<void> {
    try {
      const { id, clubId } = query;
      const rawCall = await this.api.delete(`/activities/${id}`, {
        params: { clubId },
      });
      if (rawCall.status !== 200 && rawCall.status !== 204) {
        throw new Error(
          `Error deleting reservation with id ${query.id}: ${rawCall.statusText}`,
        );
      }
    } catch (error) {
      console.error(`Error in deleteReservation for id ${query.id}:`, error);
      throw error;
    }
  }
}
