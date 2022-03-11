import { Injectable } from "@nestjs/common";
import { IPaginationParams } from "modules/common/interfaces/pagination";
import { Page, Transaction } from 'objection';
import { Order } from 'modules/database/models/order';
import { IOrder } from "modules/database/interfaces/order";

@Injectable()
export class OrderRepository {
  public async list(params: IPaginationParams, transaction?: Transaction): Promise<Page<Order>> {
    let query = Order.query(transaction)
      .select('*')
      .page(params.page, params.pageSize);

    if (params.orderBy) {
      if (params.orderBy !== 'descricao') {
        query = query.orderBy(params.orderBy, params.orderDirection);
      } else {
        query = query.orderBy('descricao', params.orderDirection).orderBy('valor', params.orderDirection);
      }
    }

    if (params.term) {
      query = query.where(query => {
        return query
          .where('descricao', 'ilike', `%${params.term}%`)
          .orWhere('quantidade', 'ilike', `%${params.term}%`)
          .orWhere('valor', 'ilike', `%${params.term}%`);
      });
    }

    return query;
  }
  public async insert(model: IOrder, transaction?: Transaction): Promise<Order> {
    return Order.query(transaction).insert(model);
  }
}