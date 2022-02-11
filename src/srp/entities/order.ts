import { OrderStatus } from './interfaces/order-status';
import { Persistency } from '../services/persistency';
import { Messaging } from '../services/messaging';
import { ShopCart } from './shopCart';

// Criada classe order, que vai precisar de um carrinho de compras
export class Order {
  private _orderStatus: OrderStatus = 'Open';

  // Injeção de dependencias:
  // Delegamos o carrinho de compras injetando no constructor
  // Delegamos o metodo de envio de msg, injetando no constructor
  // Delegamos o metodo de salvar o pedido, injetando no constructor
  constructor(
    private readonly shopCart: ShopCart,
    private readonly messaging: Messaging,
    private readonly saveOrder: Persistency,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.shopCart.isEmpty()) {
      console.log('Your cart is empty');
      return;
    }
    this._orderStatus = 'Closed';

    this.messaging.sendMessage(
      `Your order has been received with the total of ${this.shopCart.total()}`,
    );

    this.saveOrder.saveOrder();

    this.shopCart.clear();
  }
}
