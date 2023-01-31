import { Student } from "./types";
// import { Window as MyWindow } from "./window";

const myStudent: Student = {
    name: "Gorka",
    studentId: 28,
    isDeveloper: true
}

// interface Window extends MyWindow {

// }

// const myWindow: Window = {
//     myVersion: 1
// }
// interface Window {
//     myVersion: number
// }

// window.myVersion = 1.9


let myGlobalVariable: number

function changeGlobal() {
    myGlobalVariable = 10
}

changeGlobal()
//@ts-ignore
console.log(myGlobalVariable)