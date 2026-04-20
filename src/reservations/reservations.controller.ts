import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseIntPipe,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiBearerAuth,
  ApiBody,
  ApiQuery,
} from '@nestjs/swagger';
import { ReservationsService } from './reservations.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { ReservationResponseDto } from './dto/response/reservation.response.dto';
// import { AuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('Reservations')
@ApiBearerAuth()
@Controller('reservations')
// @UseGuards(AuthGuard)
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Post()
  @ApiOperation({ summary: 'Crear reserva' })
  @ApiBody({ type: CreateReservationDto })
  create(
    @Body() createReservationDto: CreateReservationDto,
  ): Promise<ReservationResponseDto> {
    try {
      return this.reservationsService.create(createReservationDto);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  @Get()
  @ApiOperation({ summary: 'Listar reservas' })
  @ApiQuery({
    name: 'clubId',
    type: Number,
    description: 'Id del club',
    required: true,
  })
  findAll(
    @Query('clubId', ParseIntPipe) clubId: number,
  ): Promise<ReservationResponseDto[]> {
    try {
      return this.reservationsService.findAll(clubId);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener reserva por ID' })
  @ApiQuery({
    name: 'clubId',
    type: Number,
    description: 'Id del club',
    required: true,
  })
  findOne(
    @Param('id', ParseIntPipe) id: number,
    @Query('clubId', ParseIntPipe) clubId: number,
  ): Promise<ReservationResponseDto> {
    try {
      return this.reservationsService.findOne(id, clubId);
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar reserva' })
  @ApiBody({ type: UpdateReservationDto })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateReservationDto: UpdateReservationDto,
  ): Promise<ReservationResponseDto> {
    try {
      return this.reservationsService.update(id, updateReservationDto);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar reserva' })
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    try {
      return this.reservationsService.remove(id);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
