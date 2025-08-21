"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
class Rectangle {
    constructor(width, length) {
        this.width = width;
        this.length = length;
    }
    calculator() {
        console.log('Perimeter: ' + (this.width + this.length) * 2);
        console.log(' Area: ' + this.width * this.length);
    }
}
exports.Rectangle = Rectangle;
