interface A {
    x: number;
}
interface B {
    y: number;
}
interface C extends A, B {
    z: number;
}
declare const c: C;
declare namespace NA {
    const x = 1;
}
declare namespace NB {
    const y = 2;
}
declare namespace NA {
    const z = 3;
}
declare class CA {
    x: number;
    sayHello(): void;
    static z: number;
    static staticMethod(): void;
}
declare namespace CA {
    const x = 2;
    const z = 3;
    const staticMethod: () => void;
}
declare const myClassObject: CA;
