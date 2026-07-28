import { Cart } from "./entities/cart";
import { Messaging } from "./services/messaging";
import { Order } from "./services/order";
import { Persistency } from "./services/persistency";
import { Product } from "./entities/product";

const cart = new Cart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(cart, messaging, persistency);

cart.addItem(new Product("shirt", 49.9));
cart.addItem(new Product("pen", 7.9));
cart.addItem(new Product("pencil", 4.9));

order.checkout();

console.log(cart.items);
console.log(cart.totalItems());
console.log(order.status);