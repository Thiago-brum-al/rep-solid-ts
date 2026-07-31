import type { PersistencyProtocol } from "../interfaces/persistency";

export class Persistency implements PersistencyProtocol {
    saveOrder(): void { console.log("Order saved"); }
}