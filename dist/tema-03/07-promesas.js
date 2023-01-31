"use strict";
// class MyPromise<Value> {
//     constructor(
//         executor: (
//             resolve: (value: Value) => void, 
//             reject: (reason: unknown) => void
//         )
//     )
// }
const resolvesUnknown = new Promise((resolve) => {
    setTimeout(() => resolve("Done!"), 1000);
});
resolvesUnknown.then(res => typeof res === "string" && res.length);
const myGoodPromise = new Promise((resolve) => {
    setTimeout(() => resolve("Good promise done!"), 1000);
});
myGoodPromise.then(res => res.length);
// const myPromiseFunction = async (val: boolean): Promise<string> => { 
//     return ...
//  }
