type ReadOnlyType<T> = {
    readonly [K in keyof T]: T[K]
}

interface Species {
    animal: string,
    variant: string
}

type ReadOnlySpecies = ReadOnlyType<Species>

const myReadOnlySpecies: ReadOnlySpecies = {
    animal: "primate",
    variant: "chimpanzee"
}

// myReadOnlySpecies.animal = "dog"


type OptionalType<T> = {
    [K in keyof T]?: T[K]
}

const myOptionalSpecies: OptionalType<Species> = {
}

function createSpeciesData(overrides?: OptionalType<Species>): Species {
    return {
        animal: overrides
            ? (overrides.animal 
                ? overrides.animal 
                : '') 
            : '',
        variant: overrides 
            ? (overrides.variant
                ? overrides.variant 
                : '') 
            : '',
        ...overrides
    }
}













export {}