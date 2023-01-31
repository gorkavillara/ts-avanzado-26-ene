class Person {
    name: string
    height: number
    constructor(n: string, h: number) {
        this.name = n
        this.height = h
    }
    speak() {
        console.log(`Hi my name is ${this.name}`)
    }
}

class Sneakers {
    brand: string
    model: string
    size: number
    constructor(b: string, m: string, s: number) {
        this.brand = b
        this.model = m
        this.size = s
    }
    run() {
        console.log("I am running super fast")
    }
}

class BasketballPlayer {
    person: Person
    sneakers: Sneakers

    constructor(name: string, height: number, size: number) {
        this.person = new Person(name, height)
        this.sneakers = new Sneakers("Nike", "Air", size)
    }

    run() {
        this.sneakers.run()
    }

    speak() {
        this.person.speak()
    }
}

















export {}