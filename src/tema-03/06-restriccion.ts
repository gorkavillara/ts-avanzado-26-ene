interface WithLength {
    length: number
}

function logLength<T extends WithLength>(val: T) {
    console.log(val.length)
}

logLength("hola mundo")
logLength([1, 2, 3, false, "Hello world"])
logLength({ name: "Gorka", length: 2 })

// logLength({ name: "Gorka" }) // Error
// logLength(new Date()) // Error

////////////////////////
// Parámetros restringidos y el uso de Keyof

function getInside<T, K extends keyof T>(container: T, key: K) {
    return container[key]
}

const myKeySymbol = Symbol("Hola mundo")

const myContainer = {
    key: "Propiedad con nombre string",
    1: "Propiedad con nombre number",
    [myKeySymbol]: "Propiedad con nombre symbol"
}

const myInsideValue = getInside(myContainer, myKeySymbol)

const myNormalObject = {
    shape: "Square",
    base: 10,
    height: 100,
    surface: 1000
}

const mySecondInsideValue = getInside(myNormalObject, "height")
console.log(mySecondInsideValue)