"use strict";
console.log("Hello from assertions");
const addHeight = (a, b) => a + b;
const getNumberButton = document.querySelector("button#button-get-number");
const heightInput = document.querySelector("input[name=height]");
getNumberButton.addEventListener("click", () => {
    // Obtener la altura desde el input
    const userHeight = heightInput.value;
    // Sumar esa altura a 100 cm
    const newHeight = addHeight(Number(userHeight), 100);
    alert(`Your height in mars would be ${newHeight}cm`);
});
