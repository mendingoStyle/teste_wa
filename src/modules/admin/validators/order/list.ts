import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsOptional, IsString } from 'class-validator';
import { PaginationValidator } from 'modules/common/validators/pagination';

export class ListValidator extends PaginationValidator {
  @IsString()
  @IsOptional()
  @IsIn(['descricao', 'valor', 'quantidade'])
  @ApiProperty({ required: false, enum: ['descricao', 'valor', 'quantidade', 'updatedDate'] })
  public orderBy: string;
}