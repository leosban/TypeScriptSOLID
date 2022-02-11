// Parte main do código, ou seja, o lado mais sujo, onde colocamos dependencias
// instanciamos classes e etc...

/*
Liskov substitution principle (Principio da substituição de Liskov):
Se o phi(x) é uma propriedade demonstrável dos objetos x de tipo T. Então phi(y) deve ser
verdadeiro para objetos y de tipo S onde S é um subtipo de T.

Simplificação: Subtipos precisam ser substituíves por seus tipos de base.

Forma mais simples: Se meu programa espera um Animal, algo do tipo Dog
(que herda de Animal) deve servir como qualquer outro animal.

De modo que se mudarmos o retorno de uma familia de classes por exemplo, estaremos
quebrando o LCP; Ou também, quando mudamos o comportamento de uma base class

Devemos ter coerências nas relações é 1;
*/

import { ShopCart } from './classes/shopCart';
import { Order } from './classes/order';
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import {
  FiftyPercentDiscount,
  NoDiscount,
  TenPercentDiscount,
} from './classes/discount';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const fiftyPercentDiscount = new FiftyPercentDiscount(); //
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShopCart(noDiscount);
const messaging = new Messaging();
const saverOrder = new Persistency();
const order = new Order(shoppingCart, messaging, saverOrder);

shoppingCart.addItem(new Product('t-shirt', 39.9));
shoppingCart.addItem(new Product('jacket', 179.9));
shoppingCart.addItem(new Product('paints', 99.9));
shoppingCart.addItem(new Product('socks', 19.9));

console.log(shoppingCart.items);

console.log(order.orderStatus);

order.checkout();

console.log(order.orderStatus);
