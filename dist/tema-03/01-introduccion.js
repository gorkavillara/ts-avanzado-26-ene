"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function identity(value) {
    return value;
}
// function numberIdentity(value: number) { return value }
// function stringIdentity(value: string) { return value }
// function booleanIdentity(value: boolean) { return value }
let myNumber = 123;
let numericIdentity = identity(myNumber);
let myName = "Gorka";
let stringyIdentity = identity(myName);
///////////////
function logCallback(callback) {
    return (input) => {
        console.log("Input: ", input);
        callback(input);
    };
}
const myFunction = logCallback((input) => {
    console.log(input.length);
});
const mySecondFunction = logCallback((input) => {
    console.log(input.length);
});
const myThirdFunction = logCallback((input) => {
    console.log(input.length);
});
myFunction("Hello World");
/////////////////
function makePair(key, value) {
    return {
        key,
        value
    };
}
const firstPair = makePair("abc", 123);
const secondPair = makePair(false, ["hola", "mundo"]);
const thirdPair = makePair(123, "Hello world");
const errorPair = makePair("Hola mundo", [123]);
