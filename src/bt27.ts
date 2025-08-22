class Person {
    constructor(public name: string) {}
}

export class Teacher extends Person {
    constructor(name: string, public subject: string) {
        super(name);
    }

    introduce(): void {
        console.log(`Tôi là ${this.name}, dạy môn ${this.subject}.`);
    }
}
