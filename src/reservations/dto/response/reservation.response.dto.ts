import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDate,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import type { FacilityNavigation } from '../../../navigation/facility.navigation';
import type { UserNavigation } from '../../../navigation/user.navigation';

export class ReservationResponseDto {
  @ApiProperty({ example: 1, description: 'ID de la reserva' })
  @IsNumber({}, { message: 'id debe ser un número' })
  id: number;

  @ApiProperty({ example: 'Partido de fútbol' })
  @IsString({ message: 'name debe ser un texto' })
  name: string;

  @ApiProperty({ example: 'deporte' })
  @IsString({ message: 'type debe ser un texto' })
  type: string;

  @ApiProperty({ example: '10:00' })
  @IsString({ message: 'hourStart debe ser un texto' })
  hourStart: string;

  @ApiProperty({ example: '12:00' })
  @IsString({ message: 'hourEnd debe ser un texto' })
  hourEnd: string;

  @ApiProperty({ example: 1 })
  @IsNumber({}, { message: 'userId debe ser un número' })
  @Min(1, { message: 'userId debe ser al menos 1' })
  userId: number;

  @ApiProperty({ example: 100 })
  @IsNumber({}, { message: 'cost debe ser un número' })
  @Min(0, { message: 'cost debe ser 0 o mayor' })
  cost: number;

  @ApiProperty({ example: 1 })
  @IsNumber({}, { message: 'facilityId debe ser un número' })
  @Min(1, { message: 'facilityId debe ser al menos 1' })
  facilityId: number;

  @ApiProperty({ example: 1 })
  @IsNumber({}, { message: 'clubId debe ser un número' })
  @Min(1, { message: 'clubId debe ser al menos 1' })
  clubId: number;

  @ApiProperty({ example: 1 })
  @IsNumber({}, { message: 'userTypeId debe ser un número' })
  @Min(1, { message: 'userTypeId debe ser al menos 1' })
  userTypeId: number;

  @ApiProperty({ example: true, required: false })
  @IsOptional()
  @IsBoolean({ message: 'isActive debe ser true o false' })
  isActive?: boolean;

  @ApiProperty({ description: 'Fecha de la reserva', required: false })
  @IsOptional()
  @IsDate({ message: 'date debe ser una fecha válida' })
  date?: Date;

  @ApiProperty({ required: false, description: 'Objeto usuario si el upstream lo incluye' })
  @IsOptional()
  user?: UserNavigation;

  @ApiProperty({ required: false, description: 'Objeto instalación si el upstream lo incluye' })
  @IsOptional()
  facility?: FacilityNavigation;
}
