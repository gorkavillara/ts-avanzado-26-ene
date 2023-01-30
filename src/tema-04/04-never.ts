// 01 - Funciones que generan siempre una excepción
const myExceptionFunction = (): never => {
    throw new Error("This is an intended error")
    // return true // Error: Type 'boolean' is not assignable to type 'never'
}

// 02 - Funciones que no finalizan de manera normal
const myInfiniteLoop = (): never => {
    while (true) {
        // Aquí hacemos cosas
    }
    // return "ok" // Error: Type 'string' is not assignable to type 'never'
}

// 03 - Bloques de código que nunca se ejecutan
const handleInput = (input: string | number) => {
    //@ts-ignore
    if (typeof input === "never") {
        throw new Error("Invalid input type")
    } else {
        // 
    }
}

// 04 - Tipo never asignado a estados de error

let errorState: never | null = null
// Más adelante se asignaría este estado a retorno de funciones

errorState = myExceptionFunction()
