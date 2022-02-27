import { OrderStatus } from './interfaces/order-status';
import { CustomerOrder } from './interfaces/customer-protocol';
import { ShopCartProtocol } from './interfaces/shopCartProtocol';
import { MessagingProtocol } from './interfaces/messagingProtocol';
import { PersistencyProtocol } from './interfaces/persistencyProtocol';

// Criada classe order, que vai precisar de um carrinho de compras
export class Order {
  private _orderStatus: OrderStatus = 'Open';

  // Injeção de dependencias:
  // Delegamos o carrinho de compras injetando no constructor
  // Delegamos o metodo de envio de msg, injetando no constructor
  // Delegamos o metodo de salvar o pedido, injetando no constructor
  constructor(
    // Order, agora vai depender da abstração da interface shopCartProtocol
    private readonly shopCart: ShopCartProtocol,
    private readonly messaging: MessagingProtocol,
    private readonly saveOrder: PersistencyProtocol,
    // Injetando o tipo CustomerOrder,
    private readonly customer: CustomerOrder,
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
      `With discount the total are ${this.shopCart.totalWithDiscount()}`,
    );

    this.saveOrder.saveOrder();

    this.shopCart.clear();

    // Logando os dados do clientes criados através do tipo customer
    console.log(
      'O cliente é:',
      this.customer.getName(),
      this.customer.getIDN(),
    );
  }
}
