import type { CartOrderStatus } from "../interfaces/cart";
import { Cart } from "../classes/cart";
import { Messaging } from "./messaging";
import { Persistency } from "./persistency";
import type { CustomerOrder } from "../interfaces/customer";

export class Order {
    private _orderStatus: CartOrderStatus = 'open';

    constructor(
        private readonly cart: Cart,
        private readonly messaging: Messaging,
        private readonly persistency: Persistency,
        private readonly customer: CustomerOrder
    ) { }

    checkout(): void {
        if (this.cart.isEmpty()) throw new Error("Your cart is not empty...");
        this._orderStatus = 'closed';
        this.messaging.sendMessage("Order completed!");
        this.persistency.saveOrder();
        this.cart.clear();

        console.log('O cliente é: ' + this.customer.getName() + ' | ' + this.customer.getIDN());
    }

    get status(): Readonly<CartOrderStatus> { return this._orderStatus }
}