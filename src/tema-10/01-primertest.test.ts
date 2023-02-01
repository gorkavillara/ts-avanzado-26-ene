// Jest admite dos tipos de extensiones por defecto
// 01 - *.test.ts
// 02 - *.spec.ts

import { getSin, suma } from "./funciones"

// Primer test estándar
test("Mi primer test", () => {
    // Aquí especificamos todos los tests
    expect(1 > 0).toBeTruthy()
})

describe("Función suma", () => {
    test("Testeando la función suma", () => {
        const resultado = suma(1, 2)
        expect(resultado).toBe(3)
    })
    test("Testeando la función suma - negativo", () => {
        const result = suma(3, 5)
        expect(result).not.toBe(5)
    })
})

describe("Testeando el seno", () => {
    test("Testeando que el seno de 0 es 0", () => {
        const res = getSin(0)
        expect(res).toBe(0)
    })
    // const myDegrees = [0, Math.PI/3, Math.PI/2]
    // myDegrees.forEach(deg => it())
    it("Testeando que el seno de cualquier número aleatorio siempre va a estar entre -1 y 1", () => {
        const num = Math.random()*20 - 10
        expect(getSin(num)).toBeLessThanOrEqual(1)
        expect(getSin(num)).toBeGreaterThanOrEqual(-1)
    })
})

describe("Otro grupo de tests", () => {
    test("Testeando cadenas", () => {
        expect("Hola").not.toBe("Adiós")
    })
    it("Testeando cadenas 2", () => {
        expect("Hola").toBe("Hola")
    })
})