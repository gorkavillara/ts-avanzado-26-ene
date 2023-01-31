"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myNumericBox = void 0;
const myBox = {
    inside: "here goes the inside of the box"
};
const myNumericBox = {
    inside: [10, 2, 3, 4]
};
exports.myNumericBox = myNumericBox;
const getLastNode = (node) => node.next ? getLastNode(node.next) : node.value;
// if (node.next) {
//     return getLastNode(node.next)
// }
// return node.value
// }
const myNode = {
    value: "Hello",
    next: {
        value: "world",
        next: {
            value: "Bye",
            next: {
                value: "earth"
            }
        }
    }
};
const myLastNode = getLastNode(myNode);
console.log(myLastNode);
const myWrongNode = {
    value: 12,
    next: {
        value: false,
        // next: {
        //     value: "Hello world"
        // }
    }
};
