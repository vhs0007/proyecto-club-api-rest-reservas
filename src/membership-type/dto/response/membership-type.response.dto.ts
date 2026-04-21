import { ApiProperty } from '@nestjs/swagger';
import {
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class MembershipTypeResponseDto {
  @ApiProperty({ example: 1, description: 'ID del tipo de membresía' })
  @IsNumber({}, { message: 'id debe ser un número' })
  id: number;

  @ApiProperty({ example: 'Premium', description: 'Nombre del tipo de membresía' })
  @IsString({ message: 'name debe ser un texto' })
  name: string;

  @ApiProperty({ example: 5000, description: 'Precio de la membresía' })
  @IsNumber({}, { message: 'price debe ser un número' })
  @Min(0, { message: 'price debe ser 0 o mayor' })
  price: number;

  @ApiProperty({
    example: 1,
    required: false,
    description: 'Id del club',
  })
  @IsOptional()
  @IsNumber({}, { message: 'clubId debe ser un número' })
  @Min(1, { message: 'clubId debe ser al menos 1' })
  clubId?: number;
}
