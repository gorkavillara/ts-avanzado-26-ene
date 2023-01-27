"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = __importDefault(require("console"));
class MyClass {
    constructor(n, id) {
        this[_a] = "Objeto de MyClass";
        this.name = n;
        this.id = id;
    }
}
_a = Symbol.toStringTag;
const myObject = new MyClass("Gorka", 12);
const myArray = [1, 2, 3, 4, 5];
console_1.default.log(myObject.toString());
console_1.default.log("------------------------------");
// 01 - Symbol.hasInstance
class MyClass2 {
    static [Symbol.hasInstance](instance) {
        return instance.hasOwnProperty("myProperty");
    }
}
const mySecondObject = {
    name: "Gorka",
    id: 32,
};
console_1.default.log(mySecondObject instanceof MyClass2);
mySecondObject.myProperty = true;
console_1.default.log(mySecondObject instanceof MyClass2);
console_1.default.log("------------------------------");
// 02 - Symbol.isConcatSpreadable
const myArray2 = [1, 2, 3, 4, 5];
const myObject2 = {
    brand: "Volkswagen",
    model: "Golf GTI",
};
const mySpreadableObject = {
    [Symbol.isConcatSpreadable]: true,
    0: "hello",
    1: "world",
    length: 2,
};
//@ts-ignore
const arrayResult = [].concat(myArray2, mySpreadableObject);
console_1.default.log(arrayResult);
console_1.default.log("------------------------------");
// 03 - Symbol.iterator
const myArray3 = [1, 2, 3, 4, 5];
console_1.default.log("----------------------");
const myIterator = myArray3[Symbol.iterator]();
console_1.default.log(myIterator.next());
console_1.default.log(myIterator.next());
console_1.default.log(myIterator.next());
console_1.default.log(myIterator.next());
console_1.default.log(myIterator.next());
console_1.default.log(myIterator.next());
console_1.default.log(myIterator.next());
const myArray4 = [6, 7, 8, 9];
const newArray = [myArray3, myArray4];
const newArray2 = [...myArray3, ...myArray4];
console_1.default.log(newArray);
console_1.default.log(newArray2);
const customProperty = Symbol("Mi variable única");
class MyCustomArray {
    constructor(...values) {
        this[_b] = true;
        this[_c] = true;
        this.values = values;
    }
    [(_b = Symbol.isConcatSpreadable, _c = customProperty, Symbol.iterator)]() {
        let i = -1;
        return {
            next: () => {
                i++;
                return {
                    value: this.values[i],
                    done: i >= this.values.length,
                };
            },
        };
    }
}
console_1.default.log("----------------------");
const myCustomArray = new MyCustomArray(1, 2, "Hello", "world");
const myCustomIterator = myCustomArray[Symbol.iterator]();
console_1.default.log(myCustomIterator.next());
console_1.default.log(myCustomIterator.next());
console_1.default.log(myCustomIterator.next());
console_1.default.log(myCustomIterator.next());
console_1.default.log(myCustomIterator.next());
console_1.default.log(myCustomIterator.next());
console_1.default.log([...myCustomArray]);
console_1.default.log("----------------------");
// 04 - Symbol.match
const myString = "Hello world";
console_1.default.log(myString.match("world"));
class MyNewRegExp extends RegExp {
    //@ts-ignore
    [Symbol.match](str) {
        const result = RegExp.prototype[Symbol.match].call(this, str);
        if (!result || result === null)
            return false;
        return true;
    }
}
//@ts-ignore
console_1.default.log("27/01/2023".match(new MyNewRegExp("([0-9]+)/([0-9]+)/([0-9]+)")));
//@ts-ignore
console_1.default.log("27/01/2023".match(new MyNewRegExp("123123123123")));
console_1.default.log("----------------------");
// 05 - Symbol.replace
console_1.default.log("Hola mundo".replace("Hola", "Adiós"));
class MyReplace {
    constructor(val) {
        this.value = val;
    }
    [Symbol.replace](str) {
        return `Antes ${str}, después ${this.value}`;
    }
}
console_1.default.log("Hola mundo".replace(new MyReplace("Adiós mundo"), ""));
// 06 - Symbol.search
console_1.default.log("----------------------");
console_1.default.log("Hola mundo".search("mundo"));
class MySearch {
    constructor(val) {
        const { searchingString } = val;
        this.value = { searchingString };
    }
    [Symbol.search](str) {
        return str.indexOf(this.value.searchingString);
    }
}
console_1.default.log("Hola Typescript".search(new MySearch({ searchingString: "script" })));
// 07 - Symbol.species
console_1.default.log("----------------------");
class DogArray extends Array {
    static get [Symbol.species]() {
        return Array;
    }
}
const myDogArray = new DogArray(5).fill("");
// ["", "", "", "", ""]
console_1.default.log({ myDogArray });
const mySecondDogArray = myDogArray.map((x) => 0);
// [0, 0, 0, 0, 0]
console_1.default.log({ mySecondDogArray });
console_1.default.log(myDogArray instanceof DogArray);
console_1.default.log(mySecondDogArray instanceof DogArray);
console_1.default.log(mySecondDogArray instanceof Array);
console_1.default.log("----------------------");
// 08 - Symbol.split
const myString2 = "1 - Pablo - Desarrollador de Typescript y futuro desarrollador de Ts-Vue3";
const data = myString2.split(" - ");
console_1.default.log({ data });
class MySplitter {
    constructor(val) {
        this.value = val;
    }
    [Symbol.split](str) {
        const index = str.indexOf(this.value);
        return [`${str.substring(0, index)} | ${str.substring(index + this.value.length)}`];
    }
}
console_1.default.log(myString2.split(new MySplitter(" - ")));
console_1.default.log("----------------------");
// 09 - Symbol.toPrimitive
class Euro {
    constructor(val) {
        this.value = val;
    }
    [Symbol.toPrimitive](hint) {
        if (hint === "number")
            return this.value;
        return `${this.value.toFixed(2)} €`;
    }
}
const myPrice = new Euro(20);
console_1.default.log(myPrice);
console_1.default.log(`My price is ${myPrice}`);
console_1.default.log(Number(myPrice) + 0.50);
// 11 - Symbol.unscopables
const myObject3 = {
    property: true
};
//@ts-ignore
myObject3[Symbol.unscopables] = {
    property: false
};
