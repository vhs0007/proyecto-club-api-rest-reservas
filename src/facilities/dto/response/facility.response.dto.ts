import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { UserResponseDto } from '../../../users/dto/response/user.response.dto';
import type { ReservationResponseDto } from '../../../reservations/dto/response/reservation.response.dto';
import { MembershipTypeResponseDto } from '../../../membership-type/dto/response/membership-type.response.dto';

export class FacilityResponseDto {
  @ApiProperty({ example: 1, description: 'ID de la instalación' })
  @IsNumber({}, { message: 'id debe ser un número' })
  id: number;

  @ApiProperty({ example: 1 })
  @IsNumber({}, { message: 'clubId debe ser un número' })
  @Min(1, { message: 'clubId debe ser al menos 1' })
  clubId: number;

  @ApiProperty({ example: 'Cancha de fútbol' })
  @IsString({ message: 'type debe ser un texto' })
  type: string;

  @ApiProperty({ example: 22 })
  @IsNumber({}, { message: 'capacity debe ser un número' })
  @Min(1, { message: 'capacity debe ser al menos 1' })
  capacity: number;

  @ApiProperty({ example: true })
  @IsBoolean({ message: 'isActive debe ser true o false' })
  isActive: boolean;

  @ApiProperty({
    required: false,
    description: 'Trabajador responsable si el upstream lo incluye',
  })
  @IsOptional()
  responsibleWorker?: UserResponseDto;

  @ApiProperty({
    required: false,
    description: 'Trabajador asistente si el upstream lo incluye',
  })
  @IsOptional()
  assistantWorker?: UserResponseDto | null;

  @ApiProperty({
    required: false,
    description: 'Actividades asociadas si el upstream las incluye',
    type: 'array',
  })
  @IsOptional()
  @IsArray()
  activities?: ReservationResponseDto[];

  @ApiProperty({
    required: false,
    description: 'Tipos de membresía aplicables si el upstream los incluye',
    type: 'array',
  })
  @IsOptional()
  @IsArray()
  membershipTypes?: MembershipTypeResponseDto[];
}
