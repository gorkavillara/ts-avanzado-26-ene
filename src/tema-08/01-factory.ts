type Shoe = {
    goal: string
}

class Sneaker implements Shoe {
    goal = "Play sports"
}

class Boot implements Shoe {
    goal = "Chop down trees"
}

class Slipper implements Shoe {
    goal = "Go to the beach"
}

const ShoeFactory = {
    create(type: ("Sneaker" | "Boot" | "Slipper")) {
        switch (type) {
            case "Boot": return new Boot()
            case "Sneaker": return new Sneaker()
            case "Slipper": return new Slipper()
        }
    }
}

const myBoot = ShoeFactory.create("Boot")
const mySneaker = ShoeFactory.create("Sneaker")