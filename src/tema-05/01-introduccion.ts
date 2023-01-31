const myApiCall = (): string | number => "Hello world"


const myResponse = myApiCall()

//@ts-ignore -> MyApiCall siempre me va a devolver "hello world" porque la he hecho yo
console.log(myResponse.toUpperCase())


////////////////

type VarType = string | number

function processMyVariable(v: VarType) {
    /// Aquí hacemos lo que sea
}

function getVariable() {
    // No lo controlo, pero lo conozco
    return
}

function getMyValue() {
    // No lo controlo, pero lo conozco
    return
}

// function myFunction() {
//     const x = getVariable()
//     processMyVariable(x)
// }

// Opción 1: asignar el tipo any a la variable
const x: any = getVariable()
processMyVariable(x)

// Opción 2: castear el tipo de la variable en la función
const y = getVariable()
processMyVariable(y as any)

// Opción 3: utilizando @ts-ignore
const z = getVariable()
//@ts-ignore
processMyVariable(z)


function myAnyFunction() {
    let a: any = 0
    let b = a + 10
    return b as number
}

////////////////////
type MyConfig = {
    a: number
    b: number
    c: {
        key: string
    }
}

let value = getMyValue()

const gorkaConfig: MyConfig = {
    a: 10,
    b: 5,
    c: {
        key: value // Error
    }
}

// Opción 1 - any -> Not recommended NEVER
const pabloConfig: any = {
    a: 10,
    b: 5,
    c: {
        key: value // NO Error
    }
}

// Opción 2 - as any -> Neither recommended
const franConfig: MyConfig = {
    a: 10,
    b: 5,
    c: {
        key: value // NO Error
    }
} as any

// Opción 3 - ts-ignore -> More recommended
const manuConfig: MyConfig = {
    a: 10,
    b: 5,
    c: {
        //@ts-ignore
        key: value // NO Error
    }
}

// Opción 4 - property as -> More/most recommended
const soleConfig: MyConfig = {
    a: 10,
    b: 5,
    c: {
        key: value as any // NO Error
    }
}

soleConfig.c.key.toUpperCase()


export {}