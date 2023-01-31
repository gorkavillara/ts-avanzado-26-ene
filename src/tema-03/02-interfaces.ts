interface Box<T> {
    inside: T
}

const myBox: Box<string> = {
    inside: "here goes the inside of the box"
}

const myNumericBox: Box<number | number[]> = {
    inside: [10, 2, 3, 4]
}

//////////
// O -> O -> O -> O -> O
interface LinkedNode<Value> {
    next?: LinkedNode<Value>
    value: Value
}

const getLastNode = <Value>(node: LinkedNode<Value>): Value =>
    node.next ? getLastNode(node.next) : node.value

// if (node.next) {
//     return getLastNode(node.next)
// }
// return node.value
// }

const myNode: LinkedNode<string> = {
    value: "Hello",
    next: {
        value: "world",
        next: {
            value: "Bye",
            next: {
                value: "earth"
            }
        }
    }
}

const myLastNode = getLastNode(myNode)

console.log(myLastNode)

const myWrongNode: LinkedNode<number | boolean> = {
    value: 12,
    next: {
        value: false,
        // next: {
        //     value: "Hello world"
        // }
    }
}

export { myNumericBox }