import { CartItem } from './cart-item';

export interface ShopCartProtocol {
  items: Readonly<CartItem[]>;

  addItem(item: CartItem): void;

  removeItem(index: number): void;

  total(): number;

  totalWithDiscount(): number | string;

  clear(): void;

  isEmpty(): boolean;
}
