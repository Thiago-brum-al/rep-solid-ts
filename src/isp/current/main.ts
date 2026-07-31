import { Cart } from "./classes/cart";
import { Messaging } from "./services/messaging";
import { Order } from "./services/order";
import { Persistency } from "./services/persistency";
import { Product } from "./classes/product";
import { FiftyPercentDiscount } from "./classes/discount";
import { EnterpriseCustomer, IndividualCustomer } from "./classes/customer";

const fiftyPercentDiscount = new FiftyPercentDiscount(); 

const individualCustomer = new IndividualCustomer("Thiago", "Brum", "12345678910");

const enterpriseCustomer = new EnterpriseCustomer("Nike", "67567467836483/0001-00");

const cart = new Cart(fiftyPercentDiscount);

const messaging = new Messaging();

const persistency = new Persistency();

const order = new Order(cart, messaging, persistency, enterpriseCustomer);

cart.addItem(new Product("shirt", 49.9));
cart.addItem(new Product("pen", 7.9));
cart.addItem(new Product("pencil", 4.9));

console.log(cart.totalWithDiscount());
console.log(cart.items);
console.log(cart.totalItems());

console.log(order.status);
order.checkout();