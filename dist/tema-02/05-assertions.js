"use strict";
const add = (a, b) => a + b;
const getElementFromDOM = () => {
    // We get the element from the DOM
    // Input where the user places his height in cm
    return "171";
};
// Input in the DOM is input type="number"
// const userHeight = <number>getElementFromDOM()      // Version 1 - legacy style
const userHeight = getElementFromDOM(); // Version 2 - recommended style
const userHeightPlusOneMeter = add(userHeight, 100);
//////////
let userId;
fetchUser();
userId.toUpperCase();
//@ts-ignore
userId.toLowerCase();
function fetchUser() {
    userId = "Gorka";
}
//////////
let myNumber = 30;
myNumber;
const myConstNumber = 30;
myConstNumber;
let myName = "Gorka";
const myConstName = "Gorka";
