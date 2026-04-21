import { FacilityResponseDto } from '../dto/response/facility.response.dto';

export interface FacilitiesDataSource {
  getFacilities(clubId: number): Promise<FacilityResponseDto[]>;
  getFacilityById(id: number, clubId: number): Promise<FacilityResponseDto>;
}
