export const suma = (a: number, b: number): number => a + b

export const getSin = (x: number): number => Math.sin(x)

export const throwsError = () => {
    throw new Error("error message")
}
export const throwsErrorWithParam = (num: number) => {
    throw new Error("error message")
}