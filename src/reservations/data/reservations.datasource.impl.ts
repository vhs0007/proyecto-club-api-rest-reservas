import { AxiosInstance } from '../../configs/axios/api.config';
import { CreateReservationDto } from '../dto/create-reservation.dto';
import { UpdateReservationDto } from '../dto/update-reservation.dto';
import { ReservationResponseDto } from '../dto/response/reservation.response.dto';
import { ReservationsDataSource } from './reservations.datasource';

export class ReservationsDataSourceImpl implements ReservationsDataSource {
  api = AxiosInstance;

  async createReservation(
    data: CreateReservationDto,
  ): Promise<ReservationResponseDto> {
    try {
      const rawCall = await this.api.post('/activities', data);
      if (rawCall.status !== 201) {
        throw new Error(`Error creating reservation: ${rawCall.statusText}`);
      }
      const response: ReservationResponseDto = rawCall.data;
      return response;
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
      const response: ReservationResponseDto[] = rawCall.data;
      return response;
    } catch (error) {
      console.error('Error in getReservations:', error);
      throw error;
    }
  }

  async getReservationById(
    id: number,
    clubId: number,
  ): Promise<ReservationResponseDto> {
    try {
      const rawCall = await this.api.get(`/activities/${id}`, {
        params: { clubId },
      });
      if (rawCall.status !== 200) {
        throw new Error(
          `Error fetching reservation with id ${id}: ${rawCall.statusText}`,
        );
      }
      const response: ReservationResponseDto = rawCall.data;
      return response;
    } catch (error) {
      console.error(`Error in getReservationById for id ${id}:`, error);
      throw error;
    }
  }

  async updateReservation(
    id: number,
    data: UpdateReservationDto,
  ): Promise<ReservationResponseDto> {
    try {
      const rawCall = await this.api.patch(`/activities/${id}`, data);
      if (rawCall.status !== 200) {
        throw new Error(
          `Error updating reservation with id ${id}: ${rawCall.statusText}`,
        );
      }
      const response: ReservationResponseDto = rawCall.data;
      return response;
    } catch (error) {
      console.error(`Error in updateReservation for id ${id}:`, error);
      throw error;
    }
  }

  async deleteReservation(id: number): Promise<void> {
    try {
      const rawCall = await this.api.delete(`/activities/${id}`);
      if (rawCall.status !== 200 && rawCall.status !== 204) {
        throw new Error(
          `Error deleting reservation with id ${id}: ${rawCall.statusText}`,
        );
      }
    } catch (error) {
      console.error(`Error in deleteReservation for id ${id}:`, error);
      throw error;
    }
  }
}
