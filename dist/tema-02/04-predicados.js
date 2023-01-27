"use strict";
/// Custom type guards
let greeting = "Hello world";
// Type guard 1 -> sin predicado
const isString = (val) => typeof val === "string";
if (isString(greeting)) {
    //@ts-ignore
    greeting.toUpperCase(); // Error de compilación (aunque nos hayamos asegurado de que es posible)
}
////////////////////
// Type guard 2 -> CON predicado
const isStringPredicate = (val) => typeof val === "string";
if (isStringPredicate(greeting)) {
    greeting.toUpperCase();
    greeting.concat(", this is my first custom type guard");
}
