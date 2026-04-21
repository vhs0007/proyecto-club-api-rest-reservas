import { AxiosInstance } from '../../configs/axios/api.config';
import { FacilityResponseDto } from '../dto/response/facility.response.dto';
import { FacilitiesDataSource } from './facilities.datasource';

export class FacilitiesDataSourceImpl implements FacilitiesDataSource {
  api = AxiosInstance;

  async getFacilities(clubId: number): Promise<FacilityResponseDto[]> {
    try {
      const rawCall = await this.api.get('/facilities', {
        params: { clubId },
      });
      if (rawCall.status !== 200) {
        throw new Error(`Error fetching facilities: ${rawCall.statusText}`);
      }
      const response: FacilityResponseDto[] = rawCall.data;
      return response;
    } catch (error) {
      console.error('Error in getFacilities:', error);
      throw error;
    }
  }

  async getFacilityById(
    id: number,
    clubId: number,
  ): Promise<FacilityResponseDto> {
    try {
      const rawCall = await this.api.get(`/facilities/${id}`, {
        params: { clubId },
      });
      if (rawCall.status !== 200) {
        throw new Error(
          `Error fetching facility with id ${id}: ${rawCall.statusText}`,
        );
      }
      const response: FacilityResponseDto = rawCall.data;
      return response;
    } catch (error) {
      console.error(`Error in getFacilityById for id ${id}:`, error);
      throw error;
    }
  }
}
