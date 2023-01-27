"use strict";
// Instanceof => para objetos/clases
class Animal {
    breathes() {
        console.log("Animals breathe");
    }
}
class Cat extends Animal {
    purrs() {
        console.log("🐈 We cats purr");
    }
}
class Dog extends Animal {
    barks() {
        console.log("🐕‍🦺 We dogs bark");
    }
}
class Frog extends Animal {
    jumps() {
        console.log("🐸 We frogs jump");
    }
}
const getRandomAnimal = () => Math.random() > 0.5 ? new Dog() : new Cat();
const myAnimal = getRandomAnimal();
if (myAnimal instanceof Dog) {
    myAnimal.barks();
}
else {
    myAnimal.purrs();
}
const fetchSomeData = () => Math.random() > 0.5 ? "Error" : 1;
const myData = fetchSomeData();
if (typeof myData === "string") {
    myData.toUpperCase();
}
else if (typeof myData === "number") {
    myData.toFixed(2);
}
const myPerson = {
    name: "Leire",
    idNumber: 123456
};
const getUniqueIdentifier = (person) => {
    // Si es un child => devuelve el idNumber
    if ("idNumber" in person)
        return person.idNumber;
    // Si es un student => devuelve el studentId
    if ("studentId" in person)
        return person.studentId;
    // Si es un adult => devuelve el ssn
    // if ("ssn" in person) return person.ssn
    return person.ssn;
};
/// Keyof => discriminar los tipos de las propiedades de los objetos
// const getValue = (object: (Adult | Student | Child), key: string) => object[key]
const getValue = (object, key) => object[key];
// K = "idNumber" | "name"
console.log(getValue(myPerson, "name").toUpperCase());
