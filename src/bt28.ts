export class Animal2 {
    protected makeSound(): void {
        console.log("Âm thanh động vật...");
    }

    public sound(): void {
        this.makeSound();
    }
}

export class Dog2 extends Animal2 {
    protected makeSound(): void {
        console.log("Gâu gâu!");
    }
}

export class Cat2 extends Animal2 {
    protected makeSound(): void {
        console.log("Meo meo!");
    }
}


