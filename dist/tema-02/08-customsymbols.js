"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let a = Symbol("Descripción");
let aDescription = a.description;
console.log(aDescription);
console.log("-----------------------------");
///// Ejemplo de uso
let b = Symbol("Descripción inicial");
let b2 = Symbol("Descripción inicial");
console.log(b.description === b2.description);
console.log(b === b2);
console.log("-----------------------------");
let c = Symbol("C");
const c2 = Symbol("C");
console.log(typeof c2);
