type ClassConstructor = new (...args: any[]) => any

function MyMixin<C extends ClassConstructor>(Class: C, type: number) {
    class MyNewClass extends Class {
        constructor(...args: any[]) {
            super(...args)
        }
        debug() {
            console.log(`This class' name is ${Class.name} and the type is ${type}`)
        }
    }
    return MyNewClass
}

class TennisPlayer {
    name: string
    ranking: number
    constructor(n: string, r: number) {
        this.name = n
        this.ranking = r
    }
}

const myTennisPlayer = new TennisPlayer("Rafa", 4)

const TennisPlayerWithDebug = MyMixin(TennisPlayer, 2)

const mySecondTennisPlayer = new TennisPlayerWithDebug("Novak", 1)
mySecondTennisPlayer.debug()

export{}