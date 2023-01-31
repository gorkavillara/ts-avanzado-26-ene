interface Quote<T = string> {
    line: T;
}
declare const myDefaultQuote: Quote;
declare const myQuote: Quote<boolean>;
interface KeyValuePair<Key, Value = Key> {
    key: Key;
    value: Value;
}
declare const firstValuePair: KeyValuePair<string, boolean>;
declare const secondValuePair: KeyValuePair<number>;
declare function inTheEnd<First, Second, Third, Fourth = boolean, Fifth = Second>(): void;
