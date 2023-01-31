"use strict";
function range(start, limit) {
    // if (typeof start !== "number" || typeof limit !== "number") return null
    const out = [];
    for (let i = start; i < limit; i++) {
        out.push(i);
    }
    return out;
}
const myRange = range(12, 24);
///////////
function betterRange(start, limit) {
    if (typeof start !== "number" || typeof limit !== "number")
        return null;
    const out = [];
    for (let i = start; i < limit; i++) {
        out.push(i);
    }
    return out;
}
const myBetterRange = betterRange(12, 24);
