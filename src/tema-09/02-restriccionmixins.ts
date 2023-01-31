type ClassConstructor<Return> = new (...args: any[]) => Return

function MyMixin<C extends ClassConstructor<{ ranking: number }>>(Class: C) {
    class MyNewClass extends Class {
        constructor(...args: any[]) {
            super(...args)
        }
        debug() {
            console.log(`This class' name is ${Class.name}`)
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

const TennisPlayerWithDebug = MyMixin(TennisPlayer)

const mySecondTennisPlayer = new TennisPlayerWithDebug("Novak", 1)
mySecondTennisPlayer.debug()

class PadelPlayer {
    name: string
    division: number
    // ranking: number = 5
    constructor(n: string, d: number) {
        this.name = n
        this.division = d
    }
}

const PadelPlayerWithDebug = MyMixin(PadelPlayer) // Error