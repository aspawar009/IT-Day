console.log("Hi Ankita");
console.log("welcome")
//console.Log("bye");
var x;
x=10//semicolon is not mandotory
//var x=10;
console.log(x)
x=20;
console.log(x, typeof x);
var x="ankita"
console.log(x, typeof x);
let y=10;
console.log(x);
y=20;
console.log(x);
//let y=30;  77cannot redeclare
console.log(x);
/* x=10;
console.log(x);*///nothing.

var a=5;
var b=2;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a**b);
console.log(a%b);
a++;
b--;
console.log(a);
console.log(b);
var c="5";
c++;
console.log(a+c);
let number = 42;          // Number type
let isLearning = true;    // Boolean type
let name = "Alice";       // String type
let x;                    // Undefined
let y = null;             // Null
let bigNum = 9007199254740991n; // BigInt

function multiply(a, b) {
    return a * b;
}

console.log(multiply(5, 3));  // Output: 15

const car = {
    brand: "Tesla",
    model: "Model S",
    year: 2020
};

console.log(car.model);  // Output: "Model S"

const person = {
    firstName: "John",
    lastName: "Doe"
};

console.log(person["firstName"]);  // Accessing using square brackets

const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    }
};

console.log(calculator.add(10, 5));   // Output: 15

const phone = {
    brand: "Samsung",
    model: "Galaxy S21"
};

console.log(JSON.stringify(phone));  // Convert object to string for display

function Animal(type, sound) {
    this.type = type;
    this.sound = sound;
    this.makeSound = function() {
        console.log(this.sound);
    };
}

const dog = new Animal("Dog", "Woof");
dog.makeSound();  // Output: "Woof"

let sentence = "JavaScript is amazing!";
console.log(sentence.length);  // Output: 21

let text = "Hello, World!";
console.log(text.replace("World", "JavaScript"));  // Output: "Hello, JavaScript!"


let message = "Learning JavaScript is fun!";
let position = message.indexOf("JavaScript");

console.log(position);  // Output: 9
