import { Injectable } from '@nestjs/common';
import { FacilitiesDataSourceImpl } from './data/facilities.datasource.impl';
import { FacilityResponseDto } from './dto/response/facility.response.dto';
import { QueryFacilitiesRequestDto } from './dto/request/query-facilities.request.dto';

@Injectable()
export class FacilitiesService {
  constructor(
    private readonly facilitiesDataSource: FacilitiesDataSourceImpl,
  ) {}

  findAll(clubId: number): Promise<FacilityResponseDto[]> {
    return this.facilitiesDataSource.getFacilities(clubId);
  }

  findOne(query: QueryFacilitiesRequestDto): Promise<FacilityResponseDto> {
    return this.facilitiesDataSource.getFacilityById(query);
  }
}
