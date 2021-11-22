import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreateEventDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsDate()
  start: Date;

  @ApiProperty()
  @IsDate()
  end: Date;

  @ApiProperty()
  @IsNumber()
  fee: number;

  @ApiPropertyOptional()
  @IsString()
  supporting: string;

  @ApiPropertyOptional()
  @IsString()
  sponsored: string;
}
