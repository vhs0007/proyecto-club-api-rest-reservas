import {
  Controller,
  Get,
  Param,
  Query,
  ParseIntPipe,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiBearerAuth,
  ApiQuery,
} from '@nestjs/swagger';
import { FacilitiesService } from './facilities.service';
import { FacilityResponseDto } from './dto/response/facility.response.dto';

@ApiTags('Facilities')
@ApiBearerAuth()
@Controller('facilities')
export class FacilitiesController {
  constructor(private readonly facilitiesService: FacilitiesService) {}

  @Get()
  @ApiOperation({ summary: 'Listar instalaciones' })
  @ApiQuery({
    name: 'clubId',
    type: Number,
    description: 'Id del club',
    required: true,
  })
  findAll(
    @Query('clubId', ParseIntPipe) clubId: number,
  ): Promise<FacilityResponseDto[]> {
    try {
      return this.facilitiesService.findAll(clubId);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener instalación por ID' })
  @ApiQuery({
    name: 'clubId',
    type: Number,
    description: 'Id del club',
    required: true,
  })
  findOne(
    @Param('id', ParseIntPipe) id: number,
    @Query('clubId', ParseIntPipe) clubId: number,
  ): Promise<FacilityResponseDto> {
    try {
      return this.facilitiesService.findOne({id: +id, clubId: clubId});
    } catch (error) {
      throw new NotFoundException(error);
    }
  }
}
