import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateEventDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsDate()
  start: Date;

  @ApiProperty()
  @IsOptional()
  @IsDate()
  end: Date;

  @ApiProperty()
  @IsNumber()
  fee: number;
}
