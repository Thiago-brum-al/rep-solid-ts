import { type CartItem, type CartOrderStatus } from "../interfaces/cart";
import type { Discount } from "./discount";

export class Cart {
    private readonly _items: CartItem[] = [];

    constructor(
        private readonly discount: Discount
    ){}

    addItem(item: CartItem): void { this._items.push(item); }

    removeItem(idx: number): void { this._items.splice(idx, 1); }

    totalItems(): number { return +(this._items.reduce((acc, curr) => acc += curr.price, 0)).toFixed(2); }

    totalWithDiscount(): number { return this.discount.calculate(this.totalItems()) }

    isEmpty(): boolean { return this._items.length === 0; }

    clear(): void { this._items.length = 0; }

    get items(): Readonly<CartItem[]> { return this._items; }

}

