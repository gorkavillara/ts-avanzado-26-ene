///// Alias de tipos genéricos
type Nullable<T> = T | null | undefined

type CreatesValue<Input, Output> = (input: Input) => Output

const myCreator: CreatesValue<number, string> = (section) => section.toFixed(2)

const mySecondCreator: CreatesValue<string, number> = (text) => text.length
