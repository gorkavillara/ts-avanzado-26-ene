console.log("Hello from assertions")

const addHeight = (a: number, b: number) => a + b

const getNumberButton = document.querySelector("button#button-get-number") as HTMLButtonElement
const heightInput = document.querySelector("input[name=height]")! as HTMLInputElement

getNumberButton.addEventListener("click", () => {
    // Obtener la altura desde el input
    const userHeight = heightInput.value as unknown
    // Sumar esa altura a 100 cm
    const newHeight = addHeight(Number(userHeight), 100)
    alert(`Your height in mars would be ${newHeight}cm`)
})

