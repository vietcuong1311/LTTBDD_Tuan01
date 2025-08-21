"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited: $${amount}. New balance: $${this.balance}`);
        }
        else {
            console.log("Invalid deposit amount");
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdraw: $${amount}. New balance: $${this.balance}`);
        }
        else {
            console.log("Invalid withdraw amount");
        }
    }
}
exports.BankAccount = BankAccount;
