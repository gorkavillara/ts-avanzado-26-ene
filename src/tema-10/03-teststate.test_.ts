class ContadorGlobal {
    contador: number = 0
    incrementa() {
        this.contador++
    }
    reset() {
        this.contador = 0
    }
}

let miContadorTodaviaMasGlobal: ContadorGlobal

beforeAll(() => {
    miContadorTodaviaMasGlobal = new ContadorGlobal()
})

describe("Probando estados de test", () => {
    let miContador: ContadorGlobal

    beforeAll(() => {
        miContador = new ContadorGlobal()
    })
    beforeEach(() => {
        miContador.reset()
    })
    afterEach(() => {
        console.log("Acabo de testear un caso de prueba")
    })
    afterAll(() => {
        console.log("Todos los casos de prueba ejecutados")
    })


    it("Testeando el contador", () => {
        miContador.incrementa()
        miContador.incrementa()
        expect(miContador.contador).toBe(2)
        console.log(miContadorTodaviaMasGlobal)
    })
    it("Testeando el contador - segundo incremento", () => {
        miContador.incrementa()
        miContador.incrementa()
        expect(miContador.contador).toBe(2)
    })
})