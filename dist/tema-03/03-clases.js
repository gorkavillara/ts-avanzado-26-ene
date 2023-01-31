"use strict";
//// Clases genéricas
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
class Pair {
    constructor(k, v) {
        this.key = k;
        this.value = v;
    }
    getValue(key) {
        return key === this.key ? this.value : null;
    }
}
const mySecretPair = new Pair(10, false);
console.log(mySecretPair.getValue(12));
console.log(mySecretPair.getValue(10));
const mySecondPair = new Pair(true, "Hello world");
const myValue = mySecondPair.getValue(true);
(_a = mySecondPair.getValue(true)) === null || _a === void 0 ? void 0 : _a.toUpperCase();
if (myValue !== null) {
    myValue.toUpperCase();
}
console.log("-----------------------------------");
///////////////
class MyCallback {
    constructor(callback) {
        this._callback = (input) => {
            console.log("Callback from inside MyCallback class");
            callback(input);
        };
    }
    call(input) {
        this._callback(input);
    }
}
const myFunction = (input) => console.log(`The input is: ${input}`);
const myCallbackFunction = new MyCallback(myFunction);
myCallbackFunction.call("Typescript rules");
/////
const mySecondCallback = new MyCallback((input) => console.log(input.toFixed(2)));
const anotherCallback = new MyCallback((input) => console.log(input.toExponential()));
// Menos recomendable
const anotherSecondCallback = new MyCallback((input) => console.log(input.toExponential()));
console.log("-----------------------------------");
//////////////////////
// Extensión de clases genéricas
class Quote {
    constructor(t) {
        this.text = t;
    }
}
class SpokenQuote extends Quote {
    speak() {
        console.log(this.text.join("\n"));
    }
}
const mySpokenQuote = new SpokenQuote([
    "Exit light",
    "Enter light",
    "Take my hand",
    "We're off to never-never land"
]);
mySpokenQuote.speak();
new Quote("Happy birthday to you").text;
new Quote([1, 2, 3, 4, 5, "Hello world"]).text;
///////////
class AttributedQuote extends Quote {
    constructor(val, speaker) {
        super(val);
        this.speaker = speaker;
    }
}
const myAttributedQuote = new AttributedQuote("We're off to never-never land", "James Hetfield");
const getMyQuote = () => Math.random() > 0.5 ? 5 : ["Hello", "world"];
////////////////////
// Esto sería redundante
const anotherAttributedQuote = new AttributedQuote(
// getMyQuote(),
[1, 4, 5, 2, 6], "ChatGPT");
// Esto sería redundante
let myNumber = 12;
class MoviePart {
    constructor(a, r) {
        this.role = r;
        this.actor = a;
    }
}
const myMoviePart = new MoviePart("Tom Cruise", "Secondary");
myMoviePart.role.toLowerCase();
// class SecondMoviePart implements Part<boolean> {
//     // role: boolean
// }
/////////////////
// Métodos de clase genéricos
class CreatePairFactory {
    constructor(key) {
        this.key = key;
    }
    createPair(value) {
        return {
            key: this.key,
            value
        };
    }
}
const myFactory = new CreatePairFactory("key");
const numberPair = myFactory.createPair(12);
const stringPair = myFactory.createPair("Gorka");
console.log("-----------------------------------");
///////////////
// Clases estáticas genéricas
class TwoLogs {
    instanceLog(val) {
        console.log(val);
        return val;
    }
    static staticLog(val) {
        console.log(val);
        return val;
    }
}
new TwoLogs().instanceLog("Happy birthday");
TwoLogs.staticLog(123).toFixed(2);
TwoLogs.staticLog([true, false, false, true]).every(val => val);
