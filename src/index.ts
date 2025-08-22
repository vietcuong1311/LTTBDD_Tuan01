import {Person} from './bt1'
import {Student} from './bt2'
import {Car} from './bt3'
import {Rectangle} from './bt4';
import {BankAccount } from './bt5';
import {Book} from './bt6';
import {User} from './bt7'
import {Product} from './bt8'
import {Account} from './bt10'
import {Cat, Dog} from "./bt11";
import {Bird, Fish} from './bt12';
import {Circle, Square} from './bt13';
import {Manager, Developer} from './bt14';
import { Library } from './bt15';
import { Box } from './bt16';
import { Logger } from './bt17';
import { MathUtil } from './bt18'
import { AnimalPoly, DogPoly, CatPoly } from './bt19';
import { Car1, Bike } from './bt20';
import { Repository } from './bt21';
import { Stack } from './bt22';
import { CardPayment, CashPayment } from './bt23';
import { Fan, AirConditioner } from "./bt24";
import { ShapeStatic } from "./bt25";
import { Order } from "./bt26";
import { Teacher } from "./bt27";
import { Animal2, Dog2, Cat2 } from "./bt28";
import { Car2, Robot } from "./bt29";
import {School, Student2 } from "./bt30";
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
var cat = new Cat('Gau');
console.log(dog.bark());
console.log(cat.meow());

//12. Define interfaces Flyable and Swimmable. Implement them in Bird and Fish classes.
var bird1 = new Bird();
var fish1 = new Fish();
bird1.fly();
fish1.swim();

//13. Create an abstract class Shape with method area(). Implement Square and Circle.
var square1 = new Square(5);
var circle1 = new Circle(5);

console.log(square1.area());
console.log(circle1.area());


//14. Create a base class Employee. Extend Manager and Developer with specific methods.
var manager = new Manager();
var dev = new Developer();

console.log(manager.manage());
console.log(dev.code());

//15. Create a Library class that can store Book and User objects. Add method to add books.
var lib1 = new Library();
lib1.addBook(book1);
lib1.addUser(user1);

console.log(lib1);

//16. Create a generic class Box that can store any type of value.
var box1 = new Box<string>("123");
console.log(box1.getValue());

var objBox = new Box<{ name: string; age: number }>({ name: "Alice", age: 22 });
console.log("Object:", objBox.getValue()); 

//17. Write a singleton Logger class that logs messages to console.
var logger1 = Logger.getInstance();
var logger2 = Logger.getInstance();
logger1.log("Hello ");
logger1.log("chao")
logger2.log("Hello ");
logger2.log("chao")
console.log(logger1 === logger2);

//18. Create a static class MathUtil with methods add(), subtract(), multiply(), divide()
console.log(MathUtil.add(3,4))
console.log(MathUtil.sub(3,4))
console.log(MathUtil.mul(3,4))
console.log(MathUtil.div(3,4))

//19. Demonstrate method overriding using polymorphism with Animal and subclasses.
var animals: AnimalPoly[] = [new DogPoly(), new CatPoly()];
animals.forEach(a => a.speak());

//20. Write a Vehicle interface and implement it in Car and Bike classes.
var car2 = new Car1();
var bike1 = new Bike();

car2.move();
bike1.move();

// 21. Create a generic Repository class with methods add(), getAll().
var repo = new Repository<string>();
repo.add("Sách A");
repo.add("Sách B");
console.log(repo.getAll());

// 22. Create a class Stack with push, pop, peek, isEmpty methods.
var stack = new Stack<number>();
stack.push(0);
console.log(stack.pop());
stack.push(2);
console.log(stack.peek());
stack.push(4);
console.log(stack.isEmpty());

// 23. Create an interface Payment with method pay(amount). Implement CashPayment and CardPayment.
var cash = new CashPayment();
var card = new CardPayment();

cash.pay(100);
card.pay(200);

// 24. Create an abstract class Appliance with method turnOn(). Implement Fan and AirConditioner.
var fan = new Fan();
fan.turnOn();
const ac = new AirConditioner();
ac.turnOn();

// 25. Create a class Shape with a static method describe().
ShapeStatic.describe();

// 26. Create a class Order with list of products. Add method to calculate total price.
var order = new Order();
order.addProduct(new Product("Ruler", 10000));
order.addProduct(new Product("Pen", 4000));
order.addProduct(new Product("Pencil", 5000));
console.log("Tổng:", order.totalPrice());

// 27. Create a class Teacher that extends Person. Add subject attribute and introduce method.
var teacher = new Teacher("Trinh Ai Cham", "Music");
teacher.introduce();

// 28. Create a class Animal with protected method makeSound(). Extend Dog and Cat to override it.
const animals2: Animal2[] = [new Dog2(), new Cat2()];
animals2.forEach(a => a.sound());
// 29. Create an interface Movable with method move(). Implement it in Car and Robot.
var car3 = new Car2();
car3.move();
var robot = new Robot();
robot.move();

// 30. Create a class School with list of Students and Teachers. Add method to display info.
var school = new School();
var student3 = new Student2("Trinh Van Quyet", 30)
school.addStudent(student3);
school.addTeacher(teacher);
school.displayInfo();

console.log("<====== END ======>");
