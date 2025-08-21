import {Person} from './bt1'
export class Student extends Person{
    grade: number;

    constructor(name: String, age: number, grade: number){
        super(name, age);
        this.grade = grade;
    }
    
}