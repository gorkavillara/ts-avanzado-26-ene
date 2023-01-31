interface WithLength {
    length: number;
}
declare function logLength<T extends WithLength>(val: T): void;
declare function getInside<T, K extends keyof T>(container: T, key: K): T[K];
declare const myKeySymbol: unique symbol;
declare const myContainer: {
    key: string;
    1: string;
    [myKeySymbol]: string;
};
declare const myInsideValue: string;
declare const myNormalObject: {
    shape: string;
    base: number;
    height: number;
    surface: number;
};
declare const mySecondInsideValue: number;
