import { MembershipTypeResponseDto } from '../dto/response/membership-type.response.dto';

export interface MembershipTypeDataSource {
  getMembershipTypes(clubId: number): Promise<MembershipTypeResponseDto[]>;
  getMembershipTypeById(
    id: number,
    clubId: number,
  ): Promise<MembershipTypeResponseDto>;
}
