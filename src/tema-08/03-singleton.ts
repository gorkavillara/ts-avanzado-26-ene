class MySingleton {
    private static instance: MySingleton
    private constructor() {}

    static getInstance() {
        if (!MySingleton.instance) {
            MySingleton.instance = new MySingleton()
        }
        return MySingleton.instance
    }

    otherLogic() {
        // Aquí va todo lo demás
    }
}

const myFirstSingleton = MySingleton.getInstance()
const mySecondSingleton = MySingleton.getInstance()

console.log(myFirstSingleton === mySecondSingleton) // true