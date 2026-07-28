type CartItem = { name: string, price: number }
type CartOrderStatus = 'open' | 'closed';

export class CartLegacy {
    private readonly _items: CartItem[] = [];
    private _orderStatus: CartOrderStatus = 'open';

    addItem(item: CartItem): void {this._items.push(item);}

    removeItem(idx: number): void {this._items.splice(idx, 1);}

    totalItems(): number { return +(this._items.reduce((acc, curr) => acc += curr.price, 0)).toFixed(2);}

    checkout(): void {
        if(this.isEmpty()) throw new Error("Your cart is not empty...");
        this._orderStatus = 'closed';
        this.sendMessage("Order completed!");
        this.saveOrder();
        this.clear();
    }

    isEmpty(): boolean {return this._items.length === 0;}

    sendMessage(message: string): void {console.log(message);}

    saveOrder(): void {console.log("Order saved");}

    clear(): void {this._items.length = 0;}

    get items(): Readonly<CartItem[]> {return this._items;}

    get status(): Readonly<CartOrderStatus> {return this._orderStatus}
}

const cart = new CartLegacy();
cart.addItem({ name: "shirt", price: 49.9 });
cart.addItem({ name: "pen", price: 7.9 });
cart.addItem({ name: "pencil", price: 4.9 });
cart.checkout();
console.log(cart.items);
console.log(cart.totalItems());
console.log(cart.status);