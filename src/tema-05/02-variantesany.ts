// Es mejor utilizar variantes de any más seguras

const getLength = (array: any) => array.length
const getLengthBetter = (array: any[]) => array.length

getLengthBetter([18])

///////////
// Tipado de objetos

const myObject = {
    name: "Square",
    surface: 180,
    height: 18
}

function hasSevenLetterKey(obj: object){
    for (const key in obj) {
        if (key.length === 7) {
            console.log(key, obj[key])
            return true
        }
    }
    return false
}

function hasSevenLetterKeyBetter(obj: { [key: string]: any }){
    for (const key in obj) {
        if (key.length === 7) {
            console.log(key, obj[key])
            return true
        }
    }
    return false
}

////////////////////
// Tipado de funciones con any

type MyFunctionType = any
type MyFunctionTypeBetter = () => any
type MyFunctionTypeEvenBetter = (args: any) => any
type MyFunctionTypeBest = (...args: any[]) => any

const numArgs = (...args: any) => args.length           // returns any
const numArgsBest = (...args: any[]) => args.length     // returns number

/// Mejores prácticas
// 1 - Cuando haya arrays en lugar de any tiparlo como any[]
// 2 - Objetos en lugar de object/any -> { [key: string]: any }
// 3 - any -> () => any -> (...args: any[]) => any

export {}