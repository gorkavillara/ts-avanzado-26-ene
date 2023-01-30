///// Alias de tipos genéricos
type Nullable<T> = T | null | undefined

type CreatesValue<Input, Output> = (input: Input) => Output

let myCreator: CreatesValue<number, string>

myCreator = section => section.toFixed(2)

let mySecondCreator: CreatesValue<string, number>

mySecondCreator = text => text.length