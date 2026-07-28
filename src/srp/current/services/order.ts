import type { CartOrderStatus } from "../interfaces/cart";
import { Cart } from "../entities/cart";
import { Messaging } from "../services/messaging";
import { Persistency } from "./persistency";

export class Order {
    private _orderStatus: CartOrderStatus = 'open';

    constructor(
        private readonly cart: Cart,
        private readonly messaging: Messaging,
        private readonly persistency: Persistency
    ) { }

    checkout(): void {
        if (this.cart.isEmpty()) throw new Error("Your cart is not empty...");
        this._orderStatus = 'closed';
        this.messaging.sendMessage("Order completed!");
        this.persistency.saveOrder();
        this.cart.clear();
    }

    get status(): Readonly<CartOrderStatus> { return this._orderStatus }
}