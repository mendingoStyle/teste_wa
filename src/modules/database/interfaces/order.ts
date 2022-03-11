export interface IOrder {
  id?: number;
  descricao: string;
  quantidade: string;
  valor: string;


  createdDate?: Date;
  updatedDate?: Date;
}