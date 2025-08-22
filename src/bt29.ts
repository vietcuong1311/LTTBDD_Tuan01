interface Movable {
    move(): void;
}

export class Car2 implements Movable {
    move(): void {
        console.log("Xe hơi di chuyển.");
    }
}

export class Robot implements Movable {
    move(): void {
        console.log("Robot bước đi.");
    }
}
