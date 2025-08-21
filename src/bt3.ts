export class Car {
    brand: String;
    model: String;
    year: number;

    constructor(brand: String, model: String, year: number) {
        this.brand = brand
        this.model = model
        this.year = year
    }

    getInfo():String{
        return `${this.brand} + ${this.model} + ${this.year}`;
    }
}