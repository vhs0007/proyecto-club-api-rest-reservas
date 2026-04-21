import { Injectable } from '@nestjs/common';
import { FacilitiesDataSourceImpl } from './data/facilities.datasource.impl';
import { FacilityResponseDto } from './dto/response/facility.response.dto';

@Injectable()
export class FacilitiesService {
  constructor(
    private readonly facilitiesDataSource: FacilitiesDataSourceImpl,
  ) {}

  findAll(clubId: number): Promise<FacilityResponseDto[]> {
    return this.facilitiesDataSource.getFacilities(clubId);
  }

  findOne(id: number, clubId: number): Promise<FacilityResponseDto> {
    return this.facilitiesDataSource.getFacilityById(id, clubId);
  }
}
