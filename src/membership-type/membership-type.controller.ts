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
import { MembershipTypeService } from './membership-type.service';
import { MembershipTypeResponseDto } from './dto/response/membership-type.response.dto';

@ApiTags('MembershipType')
@ApiBearerAuth()
@Controller('membership-type')
export class MembershipTypeController {
  constructor(private readonly membershipTypeService: MembershipTypeService) {}

  @Get()
  @ApiOperation({ summary: 'Listar tipos de membresía' })
  @ApiQuery({
    name: 'clubId',
    type: Number,
    description: 'Id del club',
    required: true,
  })
  findAll(
    @Query('clubId', ParseIntPipe) clubId: number,
  ): Promise<MembershipTypeResponseDto[]> {
    try {
      return this.membershipTypeService.findAll(clubId);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  /*@Get(':id')
  @ApiOperation({ summary: 'Obtener tipo de membresía por ID' })
  @ApiQuery({
    name: 'clubId',
    type: Number,
    description: 'Id del club',
    required: true,
  })
  findOne(
    @Param('id', ParseIntPipe) id: number,
    @Query('clubId', ParseIntPipe) clubId: number,
  ): Promise<MembershipTypeResponseDto> {
    try {
      return this.membershipTypeService.findOne(id, clubId);
    } catch (error) {
      throw new NotFoundException(error);
    }
  }*/
}