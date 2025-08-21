export class Rectangle {
    width: number;
    length: number;

    constructor(width: number, length: number) {
        this.width = width
        this.length = length
    }

    calculator(){  
        console.log('Perimeter: ' + (this.width + this.length) *2 ); 
        console.log(' Area: ' + this.width * this.length);
    }
}