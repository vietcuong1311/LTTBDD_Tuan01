"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const bt1_1 = require("./bt1");
class Student extends bt1_1.Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
}
exports.Student = Student;
