// Classe para gerar os produtos para o carrinho de compras

import { CartItem } from './interfaces/cart-item';

// que vai implementar o cartItem
export class Product implements CartItem {
  // Feita tipagem do que o construtor receber em Product
  constructor(public name: string, public price: number) {}
}
