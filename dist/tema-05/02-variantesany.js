"use strict";
// Es mejor utilizar variantes de any más seguras
Object.defineProperty(exports, "__esModule", { value: true });
const getLength = (array) => array.length;
const getLengthBetter = (array) => array.length;
getLengthBetter([18]);
///////////
// Tipado de objetos
const myObject = {
    name: "Square",
    surface: 180,
    height: 18
};
function hasSevenLetterKey(obj) {
    for (const key in obj) {
        if (key.length === 7) {
            console.log(key, obj[key]);
            return true;
        }
    }
    return false;
}
function hasSevenLetterKeyBetter(obj) {
    for (const key in obj) {
        if (key.length === 7) {
            console.log(key, obj[key]);
            return true;
        }
    }
    return false;
}
const numArgs = (...args) => args.length; // returns any
const numArgsBest = (...args) => args.length; // returns number
