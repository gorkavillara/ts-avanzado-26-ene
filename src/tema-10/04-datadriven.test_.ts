import { getSin } from "./funciones";

describe("Testing my sine", () => {
    const data = [0, Math.PI/2, Math.PI, 2*Math.PI]
    const expected = [0, 1, 0, 0]

    data.forEach((dato, index) => {
        it(`Testeamos que el seno de ${dato.toFixed(2)} es ${expected[index]}`, () => {
            expect(Math.round(getSin(dato))).toBe(expected[index])
        })
    })
})