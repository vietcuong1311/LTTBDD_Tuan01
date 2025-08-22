export class Product {
    constructor(public name: string, public price: number) {}
}

export class Order {
    products: Product[] = [];

    addProduct(p: Product): void {
        this.products.push(p);
    }

    totalPrice(): number {
        return this.products.reduce((sum, p) => sum + p.price, 0);
    }
}

