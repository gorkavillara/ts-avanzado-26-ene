class MyClass {
    name: string
    readonly id: number
    constructor(n: string, id: number) {
        this.name = n
        this.id = id
    }
}

const myObject = new MyClass("Arthur", 18)

myObject.name
myObject.id

myObject.name = "Roman"
// myObject.id = 20 // error ts(2540): Cannot assign to 'id' because it is a read-only property

console.log(myObject)

export {}