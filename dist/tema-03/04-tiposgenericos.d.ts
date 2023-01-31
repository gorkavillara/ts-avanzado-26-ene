type Nullable<T> = T | null | undefined;
type CreatesValue<Input, Output> = (input: Input) => Output;
declare const myCreator: CreatesValue<number, string>;
declare const mySecondCreator: CreatesValue<string, number>;
