import { Module } from '@nestjs/common';
import { MembershipTypeController } from './membership-type.controller';
import { MembershipTypeService } from './membership-type.service';
import { MembershipTypeDataSourceImpl } from './data/membership-type.datasource.impl';

@Module({
  controllers: [MembershipTypeController],
  providers: [MembershipTypeService, MembershipTypeDataSourceImpl],
})
export class MembershipTypeModule {}
