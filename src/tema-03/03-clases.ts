//// Clases genéricas

class Pair<Key, Value> {
    key: Key
    value: Value

    constructor(k: Key, v: Value) {
        this.key = k
        this.value = v
    }

    getValue(key: Key): Value | null {
        return key === this.key ? this.value : null
    }
}

const mySecretPair = new Pair(10, false)

console.log(mySecretPair.getValue(12))
console.log(mySecretPair.getValue(10))

const mySecondPair = new Pair(true, "Hello world")

const myValue = mySecondPair.getValue(true)

mySecondPair.getValue(true)?.toUpperCase()

if (myValue !== null) {
    myValue.toUpperCase()
}

console.log("-----------------------------------")
///////////////
class MyCallback<Input> {
    private _callback: (input: Input) => void

    constructor(callback: (input: Input) => void) {
        this._callback = (input: Input) => {
            console.log("Callback from inside MyCallback class")
            callback(input)
        }
    }

    call(input: Input) {
        this._callback(input)
    }
}

const myFunction = (input: string): void =>
    console.log(`The input is: ${input}`)

const myCallbackFunction = new MyCallback(myFunction)

myCallbackFunction.call("Typescript rules")

/////
const mySecondCallback = new MyCallback((input: number) =>
    console.log(input.toFixed(2))
)

const anotherCallback = new MyCallback<number>((input) =>
    console.log(input.toExponential())
)

// Menos recomendable
const anotherSecondCallback = new MyCallback<number>((input: number) =>
    console.log(input.toExponential())
)

console.log("-----------------------------------")
//////////////////////
// Extensión de clases genéricas

class Quote<T> {
    text: T
    constructor(t: T) {
        this.text = t
    }
}

class SpokenQuote extends Quote<string[]> {
    speak() {
        console.log(this.text.join("\n"))
    }
}

const mySpokenQuote = new SpokenQuote([
    "Exit light",
    "Enter light",
    "Take my hand",
    "We're off to never-never land"
])

mySpokenQuote.speak()

new Quote("Happy birthday to you").text
new Quote([1, 2, 3, 4, 5, "Hello world"]).text

///////////
class AttributedQuote<Value> extends Quote<Value> {
    speaker: string

    constructor(val: Value, speaker: string) {
        super(val)
        this.speaker = speaker
    }
}

const myAttributedQuote = new AttributedQuote(
    "We're off to never-never land",
    "James Hetfield"
)

const getMyQuote = (): number | string[] => Math.random() > 0.5 ? 5 : ["Hello", "world"]
////////////////////

// Esto sería redundante
const anotherAttributedQuote = new AttributedQuote<number[]>(
    // getMyQuote(),
    [1, 4, 5, 2, 6],
    "ChatGPT"
)

// Esto sería redundante
let myNumber: number = 12

//////////////
interface Part<Role> {
    role: Role
}

class MoviePart implements Part<string> {
    role: string
    actor: string
    constructor(a: string, r: string) {
        this.role = r
        this.actor = a
    }
}

const myMoviePart = new MoviePart("Tom Cruise", "Secondary")

myMoviePart.role.toLowerCase()

// class SecondMoviePart implements Part<boolean> {
//     // role: boolean
// }

/////////////////
// Métodos de clase genéricos

class CreatePairFactory<Key> {
    key: Key

    constructor(key: Key) {
        this.key = key
    }

    createPair<Value>(value: Value) {
        return {
            key: this.key,
            value
        }
    }
}

const myFactory = new CreatePairFactory("key")

const numberPair = myFactory.createPair(12)
const stringPair = myFactory.createPair("Gorka")

console.log("-----------------------------------")
///////////////
// Clases estáticas genéricas
class TwoLogs<OnInstance> {
    instanceLog(val: OnInstance) {
        console.log(val)
        return val
    }

    static staticLog<OnStatic>(val: OnStatic) {
        console.log(val)
        return val
    }
}

new TwoLogs().instanceLog("Happy birthday")

TwoLogs.staticLog(123).toFixed(2)

TwoLogs.staticLog<boolean[]>([true, false, false, true]).every(val => val)


















export{}
