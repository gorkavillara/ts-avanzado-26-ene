"use strict";
const myDefaultQuote = {
    line: "Take my hand"
};
const myQuote = {
    line: true
};
const firstValuePair = {
    key: "mykey",
    value: true
};
const secondValuePair = {
    key: 1,
    value: 2
};
///////////
function inTheEnd() { } // Esto está ok
// function notInTheEnd<First, Second = "hello", Third>() {} // Error
