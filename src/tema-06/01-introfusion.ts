interface A {
    x: number
}

interface B {
    y: number
}

interface C extends A, B {
    z: number
}

const c: C = { x: 12, y: 1, z: 0 }

//////////////
// namespaces

namespace NA {
    export const x = 1
}

namespace NB {
    export const y = 2
}

namespace NA {
    export const z = 3
}

console.log(NA.x, NB.y, NA.z)

//////////////////////
// Fusión de Namespaces con Clases, funciones y enums

class CA {
    x: number = 1
    sayHello() {
        console.log("Hello")
    }

    static z = 12

    static staticMethod() {
        return
    }
}

namespace CA {
    export const x = 2
    export const z = 3

    export const staticMethod = () =>
        console.log("this is the static method from the namespace")
}

const myClassObject = new CA()
myClassObject.x
