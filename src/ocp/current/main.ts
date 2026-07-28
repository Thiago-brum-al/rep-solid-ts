import { Cart } from "./classes/cart";
import { Messaging } from "./services/messaging";
import { Order } from "./services/order";
import { Persistency } from "./services/persistency";
import { Product } from "./classes/product";
import { FiftyPercentDiscount } from "./classes/discount";

const fiftyPercentDiscount = new FiftyPercentDiscount(); 

const cart = new Cart(fiftyPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(cart, messaging, persistency);

cart.addItem(new Product("shirt", 49.9));
cart.addItem(new Product("pen", 7.9));
cart.addItem(new Product("pencil", 4.9));

console.log(cart.totalWithDiscount());
console.log(cart.items);
console.log(cart.totalItems());
console.log(order.status);