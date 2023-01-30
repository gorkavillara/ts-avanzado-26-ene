/// Introducción a los tipos condicionales

/// LeftType extends RightType ? TrueType : FalseType

type StringIsNumber = string extends number ? true : false

let myBoolean = false
myBoolean = true

const myConstBoolean = false

let myString = "Hello"
const myConstString = "hello"

type TypeIsNumber<T> = T extends number ? (boolean | string)[] : false

type CheckString = TypeIsNumber<string>
type CheckString2 = TypeIsNumber<"string">
type CheckString3 = TypeIsNumber<123>

///////////////////////

type Callable<T> = T extends () => any // T es una función?
    ? T // Si sí, devuelve la propia función
    : () => T // Si no, devuelve una función que devuelva el tipo T

type GetNumberCallable = Callable<number>
type GetFunctionCallable = Callable<() => number>

////////////////////////////
// Tipos inferidos
type ArrayItems<T> = T extends (infer Item)[] ? Item : T

type MyInferredTypeNot = ArrayItems<boolean>

type MyInferredType = ArrayItems<boolean[]>

type MyOtherInferredType = ArrayItems<() => number[]>

//////////////////////
// Mapeo de tipos condicionales

type MyType = {
    name: string
    age: number
    getName: () => string
    getAge: () => number
    isDeveloper: () => boolean
    checkIsMember: (id: number) => boolean
}

type MakeAllPropertiesFunctions<T> = {
    [K in keyof T]: T[K] extends (...args: any[]) => any 
        ? T[K] 
        : () => T[K]
}

type MyFunctionalType = MakeAllPropertiesFunctions<MyType>

export {}
