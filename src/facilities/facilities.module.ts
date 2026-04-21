import { Module } from '@nestjs/common';
import { FacilitiesService } from './facilities.service';
import { FacilitiesController } from './facilities.controller';
import { FacilitiesDataSourceImpl } from './data/facilities.datasource.impl';

@Module({
  controllers: [FacilitiesController],
  providers: [FacilitiesService, FacilitiesDataSourceImpl],
})
export class FacilitiesModule {}
