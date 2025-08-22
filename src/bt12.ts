interface Flyable{
    fly(): void;
}

interface Swimmable {
    swim(): void;
}

export class Bird implements Flyable{
    fly(){
        console.log("Flying");
    } 
}

export class Fish {
    swim(){
        console.log("Swimming");
    }
}