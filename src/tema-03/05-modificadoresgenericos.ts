interface Quote<T = string> {
    line: T
}

const myDefaultQuote: Quote = {
    line: "Take my hand"
}

const myQuote: Quote<boolean> = {
    line: true
}

// const myWrongQuote: Quote = {
//     line: []
// }


interface KeyValuePair<Key, Value = Key> {
    key: Key,
    value: Value
}

const firstValuePair: KeyValuePair<string, boolean> = {
    key: "mykey",
    value: true
}

const secondValuePair: KeyValuePair<number> = {
    key: 1,
    value: 2
}

///////////
function inTheEnd<First, Second, Third, Fourth = boolean, Fifth = Second>() {} // Esto está ok

// function notInTheEnd<First, Second = "hello", Third>() {} // Error