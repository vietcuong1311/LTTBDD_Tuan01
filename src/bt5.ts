export class BankAccount {
    balance: number;

    constructor(balance: number){
        this.balance = balance;
    }

    deposit(amount: number){
        if(amount > 0){
            this.balance += amount;
            console.log(`Deposited: $${amount}. New balance: $${this.balance}` );
        } else {
            console.log("Invalid deposit amount");    
        }
    }

    withdraw(amount: number){
        if(amount > 0 && amount <= this.balance){
            this.balance -= amount;
            console.log(`Withdraw: $${amount}. New balance: $${this.balance}` );
        } else {
            console.log("Invalid withdraw amount");    
        }
    }
}