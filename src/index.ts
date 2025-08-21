import {Person} from './bt1'
import {Student} from './bt2'
import {Car} from './bt3'
import { Rectangle} from './bt4';
import { BankAccount } from './bt5';
import { Book } from './bt6';
import {User} from './bt7'
import {Product} from './bt8'
import {Account} from './bt10'
import { Cat, Dog } from "./bt11";
// 1. Create a class Person with attributes name and age. Write a method to display this information.
var person1 = new Person('Nguyen Van A', 20);
console.log(person1);

// 2. Write a class Student extending Person with an additional attribute grade. Add a method to display all info.
var student1 = new Student('Le Thi B', 14, 6);
console.log(student1);

// 3. Create a class Car with properties brand, model, year. Write a method to show car info.
var car1 = new Car('Vin', 'ABC', 5);
console.log(car1);
// 4. Create a class Rectangle with width and height. Write a method to calculate area and perimeter.  
var hcn1 = new Rectangle(5,6); 
hcn1.calculator();

// 5. Create a class BankAccount with balance. Add methods deposit() and withdraw().
var bank = new BankAccount(5000);

bank.deposit(1000);
bank.withdraw(3000);

// 6. Create a class Book with attributes title, author, year.
var book1 = new Book('Alex', 'Wonder Land', 2006)
console.log(book1);

// 7. Write a class User with private property name and getter/setter.
var user1 = new User('Dang Van C');
console.log(user1);

/*Create a Product class with name, price. Create an array of products and filter products with
price > 100.*/
const products: Product[] = [
  new Product("Laptop", 1200),
  new Product("Mouse", 25),
  new Product("Keyboard", 150),
  new Product("USB Cable", 15),
  new Product("Monitor", 300),
];

const expensiveProducts = products.filter(p => p.price > 100);

console.log("Products with price > 100:");
expensiveProducts.forEach(p => {
  console.log(`${p.name} - $${p.price}`);
});

//9. Define an interface Animal with name and method sound().

//10. Create a class Account with public, private and readonly fields.
var acc1 = new Account('1234567', 1000, 'Ho Van D')
console.log(acc1.id);
console.log(acc1.name);

// acc1.name = 'Nguyen Van A';

//11. Create a base class Animal. Extend Dog and Cat classes with methods bark() and meow().
var dog = new Dog('MeoMeo');
var cat = new Cat('GauGau');
console.log(dog.bark());
console.log(cat.meow());





