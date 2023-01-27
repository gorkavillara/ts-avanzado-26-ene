"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MyClass {
    constructor(n, id) {
        this.name = n;
        this.id = id;
    }
}
const myObject = new MyClass("Arthur", 18);
myObject.name;
myObject.id;
myObject.name = "Roman";
// myObject.id = 20 // error ts(2540): Cannot assign to 'id' because it is a read-only property
console.log(myObject);
