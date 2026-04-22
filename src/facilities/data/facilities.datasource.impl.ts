import { AxiosInstance } from '../../configs/axios/api.config';
import { FacilityNavigation } from '../../navigation/facility.navigation';
import { QueryFacilitiesRequestDto } from '../dto/request/query-facilities.request.dto';
import { FacilityResponseDto } from '../dto/response/facility.response.dto';
import { FacilitiesDataSource } from './facilities.datasource';

export class FacilitiesDataSourceImpl implements FacilitiesDataSource {
  api = AxiosInstance;

  private toFacilityResponseDto(facility: FacilityNavigation): FacilityResponseDto {
    return {
      ...facility,
    };
  }

  async getFacilities(clubId: number): Promise<FacilityResponseDto[]> {
    try {
      const rawCall = await this.api.get('/facilities', {
        params: { clubId },
      });
      if (rawCall.status !== 200) {
        throw new Error(`Error fetching facilities: ${rawCall.statusText}`);
      }
      const response: FacilityNavigation[] = rawCall.data;
      return response.map((facility) => this.toFacilityResponseDto(facility));
    } catch (error) {
      console.error('Error in getFacilities:', error);
      throw error;
    }
  }

  async getFacilityById(
    query: QueryFacilitiesRequestDto,
  ): Promise<FacilityResponseDto> {
    try {
      const { id, clubId } = query;
      const rawCall = await this.api.get(`/facilities/${id}`, {
        params: { clubId },
      });
      if (rawCall.status !== 200) {
        throw new Error(
          `Error fetching facility with id ${id}: ${rawCall.statusText}`,
        );
      }
      const response: FacilityNavigation = rawCall.data;
      return this.toFacilityResponseDto(response);
    } catch (error) {
      console.error(`Error in getFacilityById for id ${query.id}:`, error);
      throw error;
    }
  }
}
