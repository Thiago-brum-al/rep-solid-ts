import type { CartOrderStatus, CartProtocol } from "../interfaces/cart";
import type { CustomerOrder } from "../interfaces/customer";
import type { MessagingProtocol } from "../interfaces/messaging";
import type { PersistencyProtocol } from "../interfaces/persistency";

export class Order {
    private _orderStatus: CartOrderStatus = 'open';

    constructor(
        private readonly cart: CartProtocol,
        private readonly messaging: MessagingProtocol,
        private readonly persistency: PersistencyProtocol,
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