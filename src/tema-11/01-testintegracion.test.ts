import axios from "axios"
import { fetchData } from "./funciones"

describe("Testeando nuestra integración con axios", () => {
    const expected = "This is my response"
    beforeEach(() => {
        // Crear nuestro spy (mock)
        jest
            .spyOn(axios, "get")
            .mockImplementation(() => Promise.resolve({ data: expected }))
    })
    afterEach(() => {
        // Eliminar todos los mocks de jest
        jest.clearAllMocks()
    })
    it("Debería obtener información de un servicio HTTP", async () => {
        const resultado = await fetchData()
        console.log(resultado)
        expect(resultado).toBe(expected)
    })
})