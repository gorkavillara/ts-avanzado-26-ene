interface Box<T> {
    inside: T
}

declare const myBox: Box<string>

// const myBox: Box<string> = {
//     inside: "here goes the inside of the box"
// }

const myNumericBox: Box<number | number[]> = {
    inside: [10, 2, 3, 4]
}

console.log(myNumericBox.inside[0])