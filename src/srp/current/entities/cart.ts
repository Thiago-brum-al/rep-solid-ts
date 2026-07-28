import { type CartItem, type CartOrderStatus } from "../interfaces/cart";

export class Cart {
    private readonly _items: CartItem[] = [];

    addItem(item: CartItem): void { this._items.push(item); }

    removeItem(idx: number): void { this._items.splice(idx, 1); }

    totalItems(): number { return +(this._items.reduce((acc, curr) => acc += curr.price, 0)).toFixed(2); }

    isEmpty(): boolean { return this._items.length === 0; }

    clear(): void { this._items.length = 0; }

    get items(): Readonly<CartItem[]> { return this._items; }

}

