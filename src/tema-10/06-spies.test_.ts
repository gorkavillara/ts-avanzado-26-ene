class MiClaseEspia {
    funcionPrimaria() {
        console.log("se ha llamado a mi función primaria")
        this.funcionSecundaria("Hola mundo")
    }

    funcionSecundaria(texto: string) {}
}

it("Testeando los spies", () => {
    const miObjeto = new MiClaseEspia()

    const miFuncionEspia = jest.spyOn(
        miObjeto, "funcionSecundaria"
    )

    miObjeto.funcionPrimaria()

    expect(miFuncionEspia).toBeCalledTimes(1)
    expect(miFuncionEspia).toBeCalledWith("Hola mundo")
})