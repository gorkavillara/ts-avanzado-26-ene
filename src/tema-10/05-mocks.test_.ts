// jest.fn()

function ejecutaCallback(callback: () => any) {
    console.log("Callback ejecutado")
    return callback()
}

it("Testeando los mocks", () => {
    const miCallback = () => console.log("Hola mundo")

    const miCallbackMock = jest.fn()

    ejecutaCallback(miCallbackMock)
    ejecutaCallback(miCallbackMock)

    expect(miCallbackMock).toBeCalled()
    expect(miCallbackMock).toBeCalledTimes(2)
})