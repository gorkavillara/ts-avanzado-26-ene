import { throwsError, throwsErrorWithParam } from "./funciones"

it("Espero que 1 sea 1", () => {
    expect(-5 + 6).toBe(1)
})

describe("Testeando objetos", () => {
    it("Espero que la asignación idéntica funcione", () => {
        const objA = { name: "Roman" }
        const objB = objA
        expect(objA).toBe(objB)
    })
    it("Espero que la asignación similar funcione", () => {
        const objA = { name: "Roman" }
        const objB = { name: "Roman" }
        // expect(objA).toBe(objB)
        expect(objA).toEqual(objB)
        expect(JSON.stringify(objA)).toBe(JSON.stringify(objB))

        expect(objA).not.toBe(objB)
    })
})

// Matcher toContain
describe("Testeando el matcher toContain", () => {
    it("toContain en una cadena", () => {
        const myStr = "Hello world"
        expect(myStr).toContain("worl")
        expect(myStr).toMatch(/world/) // RegExp
        // expect(myStr).toContain(/wor/)
    })

    it("toContain en arrays", () => {
        const myArr = [1, 2, 3, 4, "hello world", false, [true, "2"]]
        expect(myArr).toContain(false)
    })
})

////////////
// Gestión de errores
it("Debería lanzar un error", () => {

    // const myError = throwsError()

    // expect(true).toBeTruthy()

    expect(throwsError).toThrowError()

    expect(() => throwsErrorWithParam(5)).toThrowError("error message")
})