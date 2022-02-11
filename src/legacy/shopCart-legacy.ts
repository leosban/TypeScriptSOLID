// Será um código legado

// Criando tipo do Item
type CartItem = { name: string; price: number };

// Criando tipo do statuso do pedido
type OrderStatus = 'Open' | 'Closed';

// Classe do carrinho de compras
export class ShopCart {
  // Atributo privado que contem os itens do carrinho que iremos receber
  // Será um array de objetos e irá iniciar vazio
  private readonly _items: CartItem[] = [];
  // Atributo privado para o status do pedido
  // Vai ser do tipo: aberto | fechado, com o valor default de aberto
  private _orderStatus: OrderStatus = 'Open';
  // Método que adiciona os itens no carrinho, com retorno vazio
  addItem(item: CartItem): void {
    this._items.push(item);
  }
  // Método que remove item do carrinho, com retorno vazio
  removeItem(index: number): void {
    this._items.splice(index, 1);
  }
  // Método getter criado para pegar os items, já que é privado, irá retornar um array
  // de produtos, que irá nos retornar os itens
  // O retorno do getter será Readonly, para evitar possíveis alterações.
  get items(): Readonly<CartItem[]> {
    return this._items;
  }
  // Método getter criada para pegar o status do pedido se aberto ou fechado
  // Irá retornar o tipo aberto ou fechado e retornará ele, mesmo pq é um atributo privado
  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }
  // Método criado para mandar mesagem de pedido recebido
  sendMessage(msg: string): void {
    console.log(`Message sent: ${msg}`);
  }
  // Método criado para salvar o pedido
  saveOrder(): void {
    // Mostramos a mensagem que o pedido foi salvo com sucesso
    console.log('Order saved successfully');
  }
  // Método criado para limpar o carrinho após a completa finalização do pedido
  clear(): void {
    // Definimos o valor inicial dos itens para 0;
    this._items.length = 0;
    // Imprimindo msg de carrinho limpo
    console.log('Shopping cart has been cleaned');
  }
  // Método de checkout para finalizar o carrinho com segurança, retorno vai ser vazio
  checkout(): void {
    // Condicional criada para verificação no carrinho para fazer o checkout da compra
    if (this.isEmpty()) {
      // Caso positivo mostra a msg no console
      console.log('Your cart is empty');
      return;
    }
    // Caso passe na verificação, definimos o _orderStatus como fechado
    this._orderStatus = 'Closed';
    // Caso o pedido tenha sido finalizado exibimos a msg de pedido finalizado
    this.sendMessage(
      `Your order has been received with the total of ${this.total()}`,
    );
    // Em seguida precisamos salvar o pedido
    this.saveOrder();
    // Em seguida precisamos limpar o carrinho
    this.clear();
  }
  // Método para verificar se o carrinho está vazio
  isEmpty(): boolean {
    // Retorno irá fazer a verificação se o carrinho possui conteúdo
    return this._items.length === 0;
  }
  // Método para calcular o total dos valores dos itens no carrinho
  // Irá retornar number | string, por causa da frase
  // Usamos '.reduce()' para transformar o array num só valor e fixamos em 2 casas decimais
  total(): number | string {
    return `${this._items
      .reduce((prev, curr) => prev + curr.price, 0)
      .toFixed(2)}`;
  }
}

// Criando itens dentro do carrinho
const shoppingCart = new ShopCart();
shoppingCart.addItem({ name: 't-shirt', price: 39.9 });
shoppingCart.addItem({ name: 'jacket', price: 179.9 });
shoppingCart.addItem({ name: 'paints', price: 99.9 });
shoppingCart.addItem({ name: 'socks', price: 9.9 });

// Testando a limpeza do carrinho
// shoppingCart.clear();

// Impressão dos itens do carrinho de compra
console.log(shoppingCart.items);

// Impressão do total do carrinho de compras
// console.log(shoppingCart.total());

// Impressão do orderStatus antes do checkout
console.log(shoppingCart.orderStatus);

// Testando metodo de checkout do carrinho
shoppingCart.checkout();

// Impressão do orderStatus após o checkout
console.log(shoppingCart.orderStatus);
