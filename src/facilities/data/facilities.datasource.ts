import { FacilityResponseDto } from '../dto/response/facility.response.dto';
import { QueryFacilitiesRequestDto } from '../dto/request/query-facilities.request.dto';

export interface FacilitiesDataSource {
  getFacilities(clubId: number): Promise<FacilityResponseDto[]>;
  getFacilityById(query: QueryFacilitiesRequestDto): Promise<FacilityResponseDto>;
}
