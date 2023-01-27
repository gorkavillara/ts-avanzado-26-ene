import console from "console";

class MyClass {
  name: string;
  id: number;
  constructor(n: string, id: number) {
    this.name = n;
    this.id = id;
  }
  [Symbol.toStringTag] = "Objeto de MyClass";
}

const myObject = new MyClass("Gorka", 12);

const myArray = [1, 2, 3, 4, 5];

console.log(myObject.toString());

console.log("------------------------------");

// 01 - Symbol.hasInstance

class MyClass2 {
  static [Symbol.hasInstance](instance: any) {
    return instance.hasOwnProperty("myProperty");
  }
}

const mySecondObject = {
  name: "Gorka",
  id: 32,
} as { name: string; id: number; myProperty?: boolean };

console.log(mySecondObject instanceof MyClass2);

mySecondObject.myProperty = true;

console.log(mySecondObject instanceof MyClass2);

console.log("------------------------------");
// 02 - Symbol.isConcatSpreadable

const myArray2 = [1, 2, 3, 4, 5];

const myObject2 = {
  brand: "Volkswagen",
  model: "Golf GTI",
};

const mySpreadableObject = {
  [Symbol.isConcatSpreadable]: true,
  0: "hello",
  1: "world",
  length: 2,
};

//@ts-ignore
const arrayResult = [].concat(myArray2, mySpreadableObject);

console.log(arrayResult);

console.log("------------------------------");
// 03 - Symbol.iterator

const myArray3 = [1, 2, 3, 4, 5];

console.log("----------------------");
const myIterator = myArray3[Symbol.iterator]();
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());

const myArray4 = [6, 7, 8, 9];

const newArray = [myArray3, myArray4];
const newArray2 = [...myArray3, ...myArray4];

console.log(newArray);
console.log(newArray2);

const customProperty: unique symbol = Symbol("Mi variable única");

class MyCustomArray {
  [Symbol.isConcatSpreadable] = true;
  values: any[];

  private [customProperty] = true;

  constructor(...values: any[]) {
    this.values = values;
  }

  [Symbol.iterator]() {
    let i = -1;
    return {
      next: (): { value: number | undefined; done: boolean } => {
        i++;
        return {
          value: this.values[i],
          done: i >= this.values.length,
        };
      },
    };
  }
}
console.log("----------------------");

const myCustomArray = new MyCustomArray(1, 2, "Hello", "world");
const myCustomIterator = myCustomArray[Symbol.iterator]();

console.log(myCustomIterator.next());
console.log(myCustomIterator.next());
console.log(myCustomIterator.next());
console.log(myCustomIterator.next());
console.log(myCustomIterator.next());
console.log(myCustomIterator.next());

console.log([...myCustomArray]);

console.log("----------------------");

// 04 - Symbol.match

const myString = "Hello world";

console.log(myString.match("world"));

class MyNewRegExp extends RegExp {
  //@ts-ignore
  [Symbol.match](str: string | RegExp) {
    const result = RegExp.prototype[Symbol.match].call(this, str as string);
    if (!result || result === null) return false;
    return true;
  }
}

//@ts-ignore
console.log("27/01/2023".match(new MyNewRegExp("([0-9]+)/([0-9]+)/([0-9]+)")));
//@ts-ignore
console.log("27/01/2023".match(new MyNewRegExp("123123123123")));

console.log("----------------------");

// 05 - Symbol.replace
console.log("Hola mundo".replace("Hola", "Adiós"));

class MyReplace {
  value: string;
  constructor(val: string) {
    this.value = val;
  }
  [Symbol.replace](str: string) {
    return `Antes ${str}, después ${this.value}`;
  }
}

console.log("Hola mundo".replace(new MyReplace("Adiós mundo"), ""));

// 06 - Symbol.search
console.log("----------------------");

console.log("Hola mundo".search("mundo"));

type SearchObject = {
  searchingString: string;
};

class MySearch {
  value: SearchObject;
  constructor(val: SearchObject) {
    const { searchingString } = val;
    this.value = { searchingString };
  }
  [Symbol.search](str: string) {
    return str.indexOf(this.value.searchingString);
  }
}

console.log(
  "Hola Typescript".search(new MySearch({ searchingString: "script" }))
);

// 07 - Symbol.species
console.log("----------------------");

class DogArray extends Array {
  static get [Symbol.species]() {
    return Array;
  }
}

const myDogArray = new DogArray(5).fill("");
// ["", "", "", "", ""]

console.log({ myDogArray });

const mySecondDogArray = myDogArray.map((x) => 0);
// [0, 0, 0, 0, 0]
console.log({ mySecondDogArray });

console.log(myDogArray instanceof DogArray);
console.log(mySecondDogArray instanceof DogArray);
console.log(mySecondDogArray instanceof Array);

console.log("----------------------");
// 08 - Symbol.split

const myString2 =
  "1 - Pablo - Desarrollador de Typescript y futuro desarrollador de Ts-Vue3";

const data = myString2.split(" - ");

console.log({ data });

class MySplitter {
  value: string;
  constructor(val: string) {
    this.value = val;
  }
  [Symbol.split](str: string) {
    const index = str.indexOf(this.value);
    return [`${str.substring(0, index)} | ${str.substring(
      index + this.value.length
    )}`];
  }
}

console.log(myString2.split(new MySplitter(" - ")))

console.log("----------------------");
// 09 - Symbol.toPrimitive

class Euro {
    value: number
    constructor(val: number) {
        this.value = val
    }

    [Symbol.toPrimitive](hint: "number" | "string" | "default") {
        if (hint === "number") return this.value
        return `${this.value.toFixed(2)} €`
    }
}

const myPrice = new Euro(20)
console.log(myPrice)
console.log(`My price is ${myPrice}`)

console.log(Number(myPrice) + 0.50)

// 11 - Symbol.unscopables

const myObject3 = {
    property: true
}

//@ts-ignore
myObject3[Symbol.unscopables] = {
    property: false
}

//@ts-ignore
// with (myObject3) {
    // console.log(property)
// }

export {};
