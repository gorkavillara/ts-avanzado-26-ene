"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const myApiCall = () => "Hello world";
const myResponse = myApiCall();
//@ts-ignore -> MyApiCall siempre me va a devolver "hello world" porque la he hecho yo
console.log(myResponse.toUpperCase());
function processMyVariable(v) {
    /// Aquí hacemos lo que sea
}
function getVariable() {
    // No lo controlo, pero lo conozco
    return;
}
function getMyValue() {
    // No lo controlo, pero lo conozco
    return;
}
// function myFunction() {
//     const x = getVariable()
//     processMyVariable(x)
// }
// Opción 1: asignar el tipo any a la variable
const x = getVariable();
processMyVariable(x);
// Opción 2: castear el tipo de la variable en la función
const y = getVariable();
processMyVariable(y);
// Opción 3: utilizando @ts-ignore
const z = getVariable();
//@ts-ignore
processMyVariable(z);
function myAnyFunction() {
    let a = 0;
    let b = a + 10;
    return b;
}
let value = getMyValue();
const gorkaConfig = {
    a: 10,
    b: 5,
    c: {
        key: value // Error
    }
};
// Opción 1 - any -> Not recommended NEVER
const pabloConfig = {
    a: 10,
    b: 5,
    c: {
        key: value // NO Error
    }
};
// Opción 2 - as any -> Neither recommended
const franConfig = {
    a: 10,
    b: 5,
    c: {
        key: value // NO Error
    }
};
// Opción 3 - ts-ignore -> More recommended
const manuConfig = {
    a: 10,
    b: 5,
    c: {
        //@ts-ignore
        key: value // NO Error
    }
};
// Opción 4 - property as -> More/most recommended
const soleConfig = {
    a: 10,
    b: 5,
    c: {
        key: value // NO Error
    }
};
soleConfig.c.key.toUpperCase();
