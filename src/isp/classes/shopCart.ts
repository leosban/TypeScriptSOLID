// Aplicando SRP - Single Responsability Principle no código
// Tipos de responsabilidade ->
// Enviar mensagens -> por email, whatsApp, redes sociais;
// Persistência -> Salvar dados em algum lugar;
// Regra de negócio -> Se estamos colocando no lugar correto;
// Validação -> Algumas vezes precisamos validar algo a parte ou validar muitas coisas,
// não é legal ter muitas validações somente numa classe

// Uma classe é considerada coesa, quando ela usa os seus atributos, dentro dos seus métodos
// Fazemos uma verificação do que é coeso dentro de uma classe e movemos para uma classe, onde seja
// coesa!

// Transformamos os tipos em interfaces e separamos por arquivos

import { Discount } from './discount';
import { CartItem } from './interfaces/cart-item';

// Em seguida analisaremos as responsabilidades do carrinho de compras
export class ShopCart {
  private readonly _items: CartItem[] = [];

  // Injeção da dependencia para o desconto
  constructor(private readonly discount: Discount) {}

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  clear(): void {
    this._items.length = 0;
    console.log('Shopping cart has been cleaned');
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  // Metódo criado para conceder desconto de 10% no valor total da compra
  // simulando uma black friday
  // Retorno do total com desconto irá ser o método do módulo discount

  totalWithDiscount(): number | string {
    return this.discount.calculate(this.total()).toFixed(2);
  }

  total(): number {
    return +this._items.reduce((prev, curr) => prev + curr.price, 0).toFixed(2);
  }
}
