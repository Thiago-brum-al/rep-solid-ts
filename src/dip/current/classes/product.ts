import type { CartItem } from "../interfaces/cart";

export class Product implements CartItem {
    constructor(
        public name: string,
        public price: number
    ) { }
}