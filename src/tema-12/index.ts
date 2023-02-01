import { factorial } from "./controllers/functions"

class Person {
    name: string
    age: number
    constructor(n: string, a: number) {
        this.name = n
        this.age = a
    }
    getFactorial() {
        return factorial(this.age)
    }
}

const myPerson = new Person("Laura", 25)

console.log(myPerson.getFactorial())