// JavaScript Maps
console.log("=== JavaScript Maps ===");

// 1. Creating a Map using an Array
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);
console.log("Fruits Map:", fruits); // Outputs: Map(3) { "apples" => 500, "bananas" => 300, "oranges" => 200 }

// 2. Using Map.set() to add and update values
fruits.set("grapes", 400);
fruits.set("apples", 600); // Updating the value for "apples"
console.log("Updated Fruits Map:", fruits); // Outputs: Map(4) { "apples" => 600, "bananas" => 300, "oranges" => 200, "grapes" => 400 }

// 3. Accessing values using get() and checking existence with has()
console.log("Bananas Quantity:", fruits.get("bananas")); // Outputs: 300
console.log("Does the map have 'mangoes'? ", fruits.has("mangoes")); // Outputs: false

// JavaScript Objects and OOP
console.log("\n=== Object-Oriented Programming in JavaScript ===");

// 1. Defining a class and creating objects
class Vehicle {
    constructor(name, maker, engine) {
        this.name = name;
        this.maker = maker;
        this.engine = engine;
    }
    getDetails() {
        return `The name of the vehicle is ${this.name} by ${this.maker}. Engine: ${this.engine}`;
    }
}

let bike1 = new Vehicle('Hayabusa', 'Suzuki', '1340cc');
let bike2 = new Vehicle('Ninja', 'Kawasaki', '998cc');
console.log(bike1.getDetails()); // Outputs details of Hayabusa
console.log(bike2.getDetails()); // Outputs details of Ninja

// 2. Encapsulation example
class Person {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.address = null; // Initialize address
    }
    addAddress(address) {
        this.address = address;
    }
    getDetails() {
        return `Name: ${this.name}, ID: ${this.id}, Address: ${this.address || "Not provided"}`;
    }
}

let person1 = new Person('Mukul', 21);
person1.addAddress('Delhi');
console.log(person1.getDetails()); // Outputs: Name: Mukul, ID: 21, Address: Delhi

// 3. Inheritance example
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        return `${this.name} makes a noise.`;
    }
}

class Dog extends Animal {
    speak() {
        return `${this.name} barks.`;
    }
}

let dog = new Dog('Buddy');
console.log(dog.speak()); // Outputs: Buddy barks.

// JavaScript Sets
console.log("\n=== JavaScript Sets ===");

// 1. Creating a Set and adding unique values
const mySet = new Set([1, 2, 3, 4]);
mySet.add(5);
mySet.add(2); // Won't add, since 2 is already in the set
console.log("My Set after additions:", mySet); // Outputs: Set(5) { 1, 2, 3, 4, 5 }

// 2. Using delete() and checking size
mySet.delete(3);
console.log("My Set after deleting 3:", mySet); // Outputs: Set(4) { 1, 2, 4, 5 }
console.log("Size of my set:", mySet.size); // Outputs: 4

// 3. Iterating over a Set
console.log("Iterating over my set:");
mySet.forEach(value => {
    console.log(value); // Outputs each value in the set
});

// Using for...of to iterate over the Set
console.log("Using for...of:");
for (const value of mySet) {
    console.log(value); // Outputs each value in the set
}
