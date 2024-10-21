//if else if
let age = 20;
if (age < 18) {
    console.log("Too young to vote.");
} else if (age >= 18 && age < 21) {
    console.log("You can vote but can't drink alcohol.");
} else {
    console.log("You can both vote and drink alcohol.");
}


let marks = 85;
if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 75) {
    console.log("Grade: B");
} else {
    console.log("Grade: C");
}


let temperature = 35;
if (temperature > 40) {
    console.log("It's too hot outside.");
} else if (temperature >= 30) {
    console.log("It's warm.");
} else {
    console.log("It's cool.");
}
//looping statemetns

let count = 5;
while (count > 0) {
    console.log(count);
    count--;
}


let sum = 0;
let i = 1;
while (i <= 5) {
    sum += i;
    i++;
}
console.log("Sum:", sum);


let x = 1;
while (x < 10) {
    if (x % 2 !== 0) {
        console.log(x);
    }
    x++;
}


let num = 1;
do {
    console.log(num);
    num++;
} while (num <= 5);


let target = 4;
let guess;
do {
    guess = Math.floor(Math.random() * 10);
    console.log("Guess:", guess);
} while (guess !== target);

let password = "12345";
let input;
do {
    input = "12345";  
    console.log("Checking password...");
} while (input !== password);
console.log("Access granted.");

for (let i = 1; i <= 5; i++) {
    console.log("Number:", i);
}

for (let i = 10; i >= 1; i--) {
    console.log("Countdown:", i);
}

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(i, "*", j, "=", i * j);
    }
}

let car = { brand: 'Toyota', model: 'Corolla', year: 2020 };

for (let key in car) {
    console.log(key, ":", car[key]);
}

let mark = { Math: 90, English: 85, Science: 92 };

for (let subject in marks) {
    console.log(subject, ":", mark[subject]);
}

let colors = ['Red', 'Green', 'Blue'];

for (let color of colors) {
    console.log(color);
}

let number = [10, 20, 30, 40];

for (let num of number) {
    console.log(num * 2);
}

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i);
}

let numbers = [10, 20, 30, 40, 50];
for (let num of numbers) {
    if (num === 30) {
        break;
    }
    console.log(num);
}

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}

for (let i = 1; i <= 5; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i); // prints odd numbers only
}

function greet(name) {
    console.log("Hello " + name);
}

greet("Alice");

function add(a, b) {
    return a + b;
}

let sum1 = add(5, 10);
console.log(sum1);

const greet = (name) => {
    return "Hello " + name;
}

console.log(greet("Alice"));

const add = (a, b) => a + b;

console.log(add(5, 7));

const square = (num) => num * num;

console.log(square(6));

// Declare and Initialize a 1D array
let fruits = ['Apple', 'Banana', 'Orange'];

// 1. Accessing elements
console.log("Accessing elements:");
console.log(fruits[0]); // Output: Apple
console.log(fruits[2]); // Output: Orange

// 2. Modifying elements
console.log("\nModifying elements:");
fruits[1] = 'Mango'; // Change 'Banana' to 'Mango'
console.log(fruits); // Output: ['Apple', 'Mango', 'Orange']
fruits[2] = 'Grapes'; // Change 'Orange' to 'Grapes'
console.log(fruits); // Output: ['Apple', 'Mango', 'Grapes']

// 3. Array length
console.log("\nArray length:");
console.log(fruits.length); // Output: 3

// 4. push() - Adds an element to the end
console.log("\nUsing push():");
fruits.push('Pineapple');
console.log(fruits); // Output: ['Apple', 'Mango', 'Grapes', 'Pineapple']

fruits.push('Strawberry');
console.log(fruits); // Output: ['Apple', 'Mango', 'Grapes', 'Pineapple', 'Strawberry']

// 5. pop() - Removes the last element
console.log("\nUsing pop():");
let removedFruit = fruits.pop();
console.log(removedFruit); // Output: Strawberry
console.log(fruits); // Output: ['Apple', 'Mango', 'Grapes', 'Pineapple']

removedFruit = fruits.pop();
console.log(removedFruit); // Output: Pineapple
console.log(fruits); // Output: ['Apple', 'Mango', 'Grapes']

// 6. shift() - Removes the first element
console.log("\nUsing shift():");
removedFruit = fruits.shift();
console.log(removedFruit); // Output: Apple
console.log(fruits); // Output: ['Mango', 'Grapes']

removedFruit = fruits.shift();
console.log(removedFruit); // Output: Mango
console.log(fruits); // Output: ['Grapes']

// 7. unshift() - Adds an element to the beginning
console.log("\nUsing unshift():");
fruits.unshift('Lemon');
console.log(fruits); // Output: ['Lemon', 'Grapes']

fruits.unshift('Peach');
console.log(fruits); // Output: ['Peach', 'Lemon', 'Grapes']

// 8. concat() - Concatenate arrays
console.log("\nUsing concat():");
let moreFruits = ['Kiwi', 'Watermelon'];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits); // Output: ['Peach', 'Lemon', 'Grapes', 'Kiwi', 'Watermelon']

let tropicalFruits = ['Pineapple', 'Coconut'];
allFruits = allFruits.concat(tropicalFruits);
console.log(allFruits); // Output: ['Peach', 'Lemon', 'Grapes', 'Kiwi', 'Watermelon', 'Pineapple', 'Coconut']

// 9. slice() - Extract a section of the array
console.log("\nUsing slice():");
let slicedFruits = allFruits.slice(1, 4);
console.log(slicedFruits); // Output: ['Lemon', 'Grapes', 'Kiwi']

slicedFruits = allFruits.slice(2);
console.log(slicedFruits); // Output: ['Grapes', 'Kiwi', 'Watermelon', 'Pineapple', 'Coconut']

// 10. splice() - Adds or removes elements
console.log("\nUsing splice():");
allFruits.splice(1, 2, 'Papaya'); // Removes 2 elements from index 1 and adds 'Papaya'
console.log(allFruits); // Output: ['Peach', 'Papaya', 'Kiwi', 'Watermelon', 'Pineapple', 'Coconut']

allFruits.splice(3, 0, 'Mango'); // Adds 'Mango' at index 3 without removing any elements
console.log(allFruits); // Output: ['Peach', 'Papaya', 'Kiwi', 'Mango', 'Watermelon', 'Pineapple', 'Coconut']

// 11. indexOf() - Find the index of an element
console.log("\nUsing indexOf():");
let index = allFruits.indexOf('Kiwi');
console.log(index); // Output: 2

index = allFruits.indexOf('Strawberry');
console.log(index); // Output: -1 (Not found)

// 12. includes() - Check if an element exists
console.log("\nUsing includes():");
let hasMango = allFruits.includes('Mango');
console.log(hasMango); // Output: true

let hasBanana = allFruits.includes('Banana');
console.log(hasBanana); // Output: false

// 13. join() - Join array elements into a string
console.log("\nUsing join():");
let fruitString = allFruits.join(', ');
console.log(fruitString); // Output: 'Peach, Papaya, Kiwi, Mango, Watermelon, Pineapple, Coconut'

fruitString = allFruits.join(' - ');
console.log(fruitString); // Output: 'Peach - Papaya - Kiwi - Mango - Watermelon - Pineapple - Coconut'

// 14. reverse() - Reverse the array
console.log("\nUsing reverse():");
allFruits.reverse();
console.log(allFruits); // Output: ['Coconut', 'Pineapple', 'Watermelon', 'Mango', 'Kiwi', 'Papaya', 'Peach']

// 15. sort() - Sort the array alphabetically
console.log("\nUsing sort():");
allFruits.sort();
console.log(allFruits); // Output: ['Coconut', 'Kiwi', 'Mango', 'Papaya', 'Peach', 'Pineapple', 'Watermelon']

// 16. Iterating through arrays using forEach()
console.log("\nUsing forEach() to iterate:");
allFruits.forEach(function(fruit, index) {
    console.log(index, fruit);
});

// 17. Iterating through arrays using for...of
console.log("\nUsing for...of to iterate:");
for (let fruit of allFruits) {
    console.log(fruit);
}
