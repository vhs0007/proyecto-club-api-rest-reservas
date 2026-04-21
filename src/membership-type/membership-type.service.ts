import { Injectable } from '@nestjs/common';
import { MembershipTypeDataSourceImpl } from './data/membership-type.datasource.impl';
import { MembershipTypeResponseDto } from './dto/response/membership-type.response.dto';

@Injectable()
export class MembershipTypeService {
  constructor(
    private readonly membershipTypeDataSource: MembershipTypeDataSourceImpl,
  ) {}

  findAll(clubId: number): Promise<MembershipTypeResponseDto[]> {
    return this.membershipTypeDataSource.getMembershipTypes(clubId);
  }

  findOne(id: number, clubId: number): Promise<MembershipTypeResponseDto> {
    return this.membershipTypeDataSource.getMembershipTypeById(id, clubId);
  }
}
