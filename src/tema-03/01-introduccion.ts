function identity<T>(value: T) {
    return value
}

// function numberIdentity(value: number) { return value }
// function stringIdentity(value: string) { return value }
// function booleanIdentity(value: boolean) { return value }

let myNumber = 123

let numericIdentity = identity(myNumber)

let myName = "Gorka"
let stringyIdentity = identity(myName)

///////////////
function logCallback<Input>(callback: (input: Input) => void) {
    return (input: Input) => {
        console.log("Input: ", input)
        callback(input)
    }
}

const myFunction = logCallback((input: string) => {
    console.log(input.length)
})

const mySecondFunction = logCallback<string>((input) => {
    console.log(input.length)
})

const myThirdFunction = logCallback<string>((input: string) => {
    console.log(input.length)
})

myFunction("Hello World")

/////////////////
function makePair<Key, Value>(key: Key, value: Value) {
    return {
        key,
        value
    }
}

const firstPair = makePair("abc", 123)

const secondPair = makePair<boolean, string[]>(false, ["hola", "mundo"])
const thirdPair = makePair<123, "Hello world">(123, "Hello world")

const errorPair = makePair<string, number[]>("Hola mundo", [123])

// const boolPair = makePair<string>() // Error

/////////////////////
type TErrorDeprecated = {
    error: Error
}

type TErrorNew = Error

// function makePair2<Key, Value, TError>(
//     key: Key,
//     value: Value
// ): TError extends TErrorDeprecated ? TErrorDeprecated : TErrorNew {
//     const val = Math.random()
//     // Condición de si TError es TErrorDeprecated
//     // Condición de si no
// }

export {}
