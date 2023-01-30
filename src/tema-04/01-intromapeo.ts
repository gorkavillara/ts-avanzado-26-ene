// El mapeo de tipos

// type NewType = {
//     [K in OriginalType] : NewProperty
// }

type Animals = "dog" | "cat" | "parrot" | "alligator"

const myAnimal: Animals = "dog"

type AnimalCount = {
    [K in Animals]: number
}

const myAnimalCount: AnimalCount = {
    alligator: 12,
    cat: 2,
    dog: 9,
    parrot: 11
}

////////////////////////

interface AnimalVariants {
    alligator: boolean,
    cat: number,
    parrot: string,
    dog: (boolean | number)[]
}

type AnimalCount_2 = {
    [K in keyof AnimalVariants]: number[]
}

const mySecondAnimalCount: AnimalCount_2 = {
    alligator: [1, 2, 3, 4, 5, 6],
    cat: [1, 2, 3, 4, 5, 6],
    parrot: [1, 2, 3, 4, 5, 6],
    dog: [1, 2, 3, 4, 5, 6]
}

//////////////////

interface BirdVariants {
    readonly parrot: string,
    eagle: boolean,
    albatross: number[]
}

type BirdCount = {
    [K in keyof BirdVariants]: BirdVariants[K]
}

const myNewBirds: BirdCount = {
    parrot: "Hello parrot",
    eagle: false,
    albatross: []
}

//////////////////////
// Modificadores de tipos
// Modificadores de acceso como ? o readonly

interface Shape {
    name: string
    readonly base: number
    readonly height: number
    surface?: number
}

type ReadOnlyShape = {
    readonly [K in keyof Shape]: Shape[K]
}

const myReadOnlyShape: ReadOnlyShape = {
    base: 1,
    height: 2,
    name: ""
}

// myReadOnlyShape.name = "23" // Error -> name is readonly

///////////////
type OptionalShape = {
    [K in keyof Shape]?: Shape[K]
}

const myOptionalShape: OptionalShape = {
    base: 1
}

////////////////////
type NotReadOnlyShape = {
    -readonly [K in keyof Shape]: Shape[K]
}

type NotOptionalShape = {
    [K in keyof Shape]-?: Shape[K]
}












export {}