declare class Animal {
    breathes(): void;
}
declare class Cat extends Animal {
    purrs(): void;
}
declare class Dog extends Animal {
    barks(): void;
}
declare class Frog extends Animal {
    jumps(): void;
}
declare const getRandomAnimal: () => Cat | Dog;
declare const myAnimal: Cat | Dog;
type MyData = string | 1;
declare const fetchSomeData: () => unknown;
declare const myData: unknown;
interface Adult {
    name: string;
    familyName: string;
    ssn: string;
}
interface Student {
    name: string;
    familyName: string;
    studentId: number;
}
interface Child {
    name: string;
    idNumber: number;
}
declare const myPerson: (Adult | Student | Child);
declare const getUniqueIdentifier: (person: (Adult | Student | Child)) => string | number;
declare const getValue: <T, K extends keyof T>(object: T, key: K) => T[K];
