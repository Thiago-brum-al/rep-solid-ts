export type CartItem = { name: string, price: number };

export type CartOrderStatus = 'open' | 'closed';

export interface CartProtocol {
    items: Readonly<CartItem[]>;
    addItem(item: CartItem): void;
    removeItem(index: number): void;
    totalItems(): number;
    totalWithDiscount(): number;
    isEmpty(): boolean;
    clear(): void;
}