// Parte main do código, ou seja, o lado mais sujo, onde colocamos dependencias
// instanciamos classes e etc...

import { ShopCart } from './entities/shopCart';
import { Order } from './entities/order';
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';
import { Product } from './entities/product';

const shoppingCart = new ShopCart();
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
