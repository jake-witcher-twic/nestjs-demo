import { OmitType } from '@nestjs/swagger';
import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsString,
  IsUUID,
} from 'class-validator';

export class EmployeeDto {
  @IsUUID()
  @IsNotEmpty()
  id: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsDateString()
  @IsNotEmpty()
  createdAt: Date;
}

export class EmployeeCreateDto extends OmitType(EmployeeDto, [
  'id',
  'createdAt',
] as const) {}
