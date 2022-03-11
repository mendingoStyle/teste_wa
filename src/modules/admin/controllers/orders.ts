import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthRequired } from 'modules/common/guards/token';
import { OrderRepository } from '../repositories/orders';
import { OrderService } from '../services/orders';
import { Order } from 'modules/database/models/order';
import { ListValidator } from '../validators/order/list';
import { SaveValidator } from '../validators/order/save';
import { enRoles } from 'modules/database/interfaces/user';

@AuthRequired([enRoles.admin])
@ApiTags('Admin: Order')
@Controller('/order')
export class OrderController {
  constructor(
    private orderRepository: OrderRepository,
    private orderService: OrderService
  ) { }

  @Get()
  @ApiResponse({ status: 200, type: [Order] })
  public async list(@Query() model: ListValidator) {
    return this.orderRepository.list(model);
  }

  @Post()
  @ApiResponse({ status: 200, type: Order })
  public async save(@Body() model: SaveValidator) {
    return this.orderService.save(model);
  }
}