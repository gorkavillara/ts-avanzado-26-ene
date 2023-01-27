"use strict";
// let a: any = "Hola"
// let b: any = [18]
// let c = a + b
// console.log(c)
// console.log(a.toFixed(2))
// console.log(b.toUpperCase())
// npm install -g ts-node
let a = "Hola";
a = 30; // a unknown
if (typeof a === "string") {
    console.log(a.toUpperCase()); // a string
}
if (typeof a === "number") {
    a.toFixed(2); // a number
}
let b = "Hola";
console.log(b.toUpperCase());
