import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateEventDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  // @IsDate()
  @IsString()
  start: string;

  @ApiProperty()
  @IsOptional()
  // @IsDate()
  @IsString()
  end: string;

  @ApiProperty()
  @IsNumber()
  fee: number;
}
