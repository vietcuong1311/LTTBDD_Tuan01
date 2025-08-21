export class Account {
    public id: string;
    private balance: number;
    readonly name: string;

    constructor(id: string, balance: number, name: string) {
        this.id = id
        this.balance = balance
        this.name = name
    }
}