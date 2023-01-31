"use strict";
const c = { x: 12, y: 1, z: 0 };
//////////////
// namespaces
var NA;
(function (NA) {
    NA.x = 1;
})(NA || (NA = {}));
var NB;
(function (NB) {
    NB.y = 2;
})(NB || (NB = {}));
(function (NA) {
    NA.z = 3;
})(NA || (NA = {}));
console.log(NA.x, NB.y, NA.z);
//////////////////////
// Fusión de Namespaces con Clases, funciones y enums
class CA {
    constructor() {
        this.x = 1;
    }
    sayHello() {
        console.log("Hello");
    }
    static staticMethod() {
        return;
    }
}
CA.z = 12;
(function (CA) {
    CA.x = 2;
    CA.z = 3;
    CA.staticMethod = () => console.log("this is the static method from the namespace");
})(CA || (CA = {}));
const myClassObject = new CA();
myClassObject.x;
