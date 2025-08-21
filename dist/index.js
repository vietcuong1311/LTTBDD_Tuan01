"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bt1_1 = require("./bt1");
const bt2_1 = require("./bt2");
const bt3_1 = require("./bt3");
const bt4_1 = require("./bt4");
const bt5_1 = require("./bt5");
const bt6_1 = require("./bt6");
// 1. Create a class Person with attributes name and age. Write a method to display this information.
var person1 = new bt1_1.Person('Nguyen Van A', 20);
console.log(person1);
// 2. Write a class Student extending Person with an additional attribute grade. Add a method to display all info.
var student1 = new bt2_1.Student('Le Thi B', 14, 6);
console.log(student1);
// 3. Create a class Car with properties brand, model, year. Write a method to show car info.
var car1 = new bt3_1.Car('Vin', 'ABC', 5);
console.log(car1);
// 4. Create a class Rectangle with width and height. Write a method to calculate area and perimeter.  
var hcn1 = new bt4_1.Rectangle(5, 6);
hcn1.calculator();
// 5. Create a class BankAccount with balance. Add methods deposit() and withdraw().
var bank = new bt5_1.BankAccount(5000);
bank.deposit(1000);
bank.withdraw(3000);
// 6. Create a class Book with attributes title, author, year.
var book1 = new bt6_1.Book('Alex', 'Wonder Land', 2006);
console.log(book1);
// 7. Write a class User with private property name and getter/setter.
