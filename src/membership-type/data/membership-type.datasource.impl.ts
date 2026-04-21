import { AxiosInstance } from '../../configs/axios/api.config';
import { MembershipTypeResponseDto } from '../dto/response/membership-type.response.dto';
import { MembershipTypeDataSource } from './membership-type.datasource';

export class MembershipTypeDataSourceImpl implements MembershipTypeDataSource {
  api = AxiosInstance;

  async getMembershipTypes(
    clubId: number,
  ): Promise<MembershipTypeResponseDto[]> {
    try {
      const rawCall = await this.api.get('/membership-type', {
        params: { clubId },
      });
      if (rawCall.status !== 200) {
        throw new Error(
          `Error fetching membership types: ${rawCall.statusText}`,
        );
      }
      const response: MembershipTypeResponseDto[] = rawCall.data;
      return response;
    } catch (error) {
      console.error('Error in getMembershipTypes:', error);
      throw error;
    }
  }

  /*async getMembershipTypeById(
    id: number,
    clubId: number,
  ): Promise<MembershipTypeResponseDto> {
    try {
      const rawCall = await this.api.get(`/membership-type/${id}`, {
        params: { clubId },
      });
      if (rawCall.status !== 200) {
        throw new Error(
          `Error fetching membership type with id ${id}: ${rawCall.statusText}`,
        );
      }
      const response: MembershipTypeResponseDto = rawCall.data;
      return response;
    } catch (error) {
      console.error(`Error in getMembershipTypeById for id ${id}:`, error);
      throw error;
    }
  }*/
}
