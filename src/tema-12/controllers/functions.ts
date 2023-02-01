export const factorial = (num: number) => {
    let res = 1
    for (let i = num; i > 1; i--) {
        res *= i
    }
    return res
}