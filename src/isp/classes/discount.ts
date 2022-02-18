// Classe abstrata criada para reunir todos os descontos
export abstract class Discount {
  // Atributo protected com o desconto inicial sendo 0, que será alterado
  // nas outras classes
  protected discount = 0;
  // Método calculate recebe um preço e vai aplicar um desconto no preço
  calculate(price: number): number {
    return price - price * this.discount;
  }
}

// Desconto de 50% na classe Fifty
export class FiftyPercentDiscount extends Discount {
  // Atributo de leitura protegido para atribuir 50% de desconto.
  protected readonly discount = 0.5;
}

// Fazendo isso não alteramos o código fonte do shopCart para mudar o desconto
// Ao invés de alterar o desconto, podemos criar novos descontos estendendo
// a classe abstrata

// Desconto de 10% na classe Ten
export class TenPercentDiscount extends Discount {
  // Atributo de leitura privado para atribuir 10% de desconto.
  protected readonly discount = 0.1;
}

export class NoDiscount extends Discount {}
