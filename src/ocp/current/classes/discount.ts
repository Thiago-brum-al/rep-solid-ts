export abstract class Discount {
    protected readonly discount: number = 0;

    calculate(value: number): number {
        return value - (value * this.discount);
    };
}

export class FiftyPercentDiscount extends Discount {
    protected readonly discount: number = 0.5;
}

export class WithoutDiscount extends Discount {}