import { Model } from 'objection';
import { IOrder } from '../interfaces/order';
import { ApiProperty } from '@nestjs/swagger';

export class Order extends Model implements IOrder {
  @ApiProperty({ type: 'integer' })
  public id: number;
  @ApiProperty({ type: 'string' })
  public descricao: string;
  @ApiProperty({ type: 'string' })
  public valor: string;
  @ApiProperty({ type: 'string' })
  public quantidade: string;
  @ApiProperty({ type: 'string', format: 'date-time' })
  public createdDate: Date;
  @ApiProperty({ type: 'string', format: 'date-time' })
  public updatedDate: Date;

  public static get tableName(): string {
    return 'Order';
  }
}

