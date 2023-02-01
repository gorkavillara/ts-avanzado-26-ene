class SimulacionAsincrono {
    ejecutaFuncionLenta(completado: (str: string) => any) {
        setTimeout(() => completado("Hola mundo"), 1000)
    }
}

describe("Testeando funciones asíncronas - ERROR", () => {
    it("debería llamar al callback", () => {
        const miObjetoAsincrono = new SimulacionAsincrono()
        console.log("1 - llamando a la función")
        let valor: string
        miObjetoAsincrono.ejecutaFuncionLenta((str: string) => {
            valor = str
        })
        //@ts-ignore
        console.log(valor)
        //@ts-ignore
        // expect(valor).toBe("Hola mundo")
    })
})

describe("Testeando funciones asíncronas - done()", () => {
    let valor: string
    beforeEach((done: jest.DoneCallback) => {
        const miObjetoAsincrono = new SimulacionAsincrono()
        console.log("1 - llamando a la función")
        miObjetoAsincrono.ejecutaFuncionLenta((str: string) => {
            valor = str
            done()
        })
    })

    it("debería llamar al callback", () => {
        console.log(valor)
        expect(valor).toBe("Hola mundo")
    })
})

const miPromesa = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve("Hello world from the promise"), 2000)
})

describe("Testeando con async await", () => {
    test("Mi test con async await", async () => {
        const miRetorno = await miPromesa()
        console.log(miRetorno)
        expect(miRetorno).toBe("Hello world from the promise")
    })
})