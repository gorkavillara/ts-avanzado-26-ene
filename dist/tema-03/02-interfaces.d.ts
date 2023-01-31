interface Box<T> {
    inside: T;
}
declare const myNumericBox: Box<number | number[]>;
export { myNumericBox };
