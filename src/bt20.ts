export interface Vehicle {
    move(): void;
}

export class Car1 implements Vehicle {
    move(): void {
        console.log("Car is moving");
    }
}

export class Bike implements Vehicle {
    move(): void {
        console.log("Bike is moving");
    }
}
