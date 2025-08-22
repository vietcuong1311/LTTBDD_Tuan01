export class Student2 {
    constructor(public name: string, public age: number) {}
}

export class Teacher2 {
    constructor(public name: string, public subject: string) {}
}

export class School {
    students: Student2[] = [];
    teachers: Teacher2[] = [];

    addStudent(s: Student2): void { this.students.push(s); }
    addTeacher(t: Teacher2): void { this.teachers.push(t); }

    displayInfo(): void {
        console.log("Danh sách học sinh:");
        this.students.forEach(s => console.log(`${s.name}, ${s.age} tuổi`));
        console.log("Danh sách giáo viên:");
        this.teachers.forEach(t => console.log(`${t.name}, dạy môn ${t.subject}`));
    }
}


