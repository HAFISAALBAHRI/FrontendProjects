// Variables & Dynamic Typing

const myName = "Hafisa";

let value = 0;

console.log(myName);

console.log(typeof value);

value = "hello";

console.log(typeof value);

// Operators & Comparisons

console.log("10" == 10);

console.log("10" === 10);

const userName = "";

if (userName) {
    console.log("Username exists");
}
else {
    console.log("Username is empty");
}

// Control Flow

const grades = [85, 92, 58, 73, 40];

for (const grade of grades) {

    if (grade >= 60) {
        console.log(`${grade} -> Pass`);
    }
    else {
        console.log(`${grade} -> Fail`);
    }

}


const score = 85;

switch (true) {

    case score >= 90:
        console.log("A");
        break;

    case score >= 80:
        console.log("B");
        break;

    case score >= 70:
        console.log("C");
        break;

    default:
        console.log("F");

}

//Functions


// 1. Function Declaration

function isEvenDeclaration(number) {

    return number % 2 === 0;

}


// 2. Function Expression

const isEvenExpression = function (number) {

    return number % 2 === 0;

};


// 3. Arrow Function

const isEvenArrow = (number) => {

    return number % 2 === 0;

};


// Test all three

console.log(isEvenDeclaration(8));

console.log(isEvenExpression(8));

console.log(isEvenArrow(8));



// 4. Default Parameter

function greet(name = "Guest") {

    return `Hello, ${name}`;

}

console.log(greet());

console.log(greet("Hafisa"));



// 5. Rest Parameter

function sum(...numbers) {

    let total = 0;

    for (const number of numbers) {

        total = total + number;

    }

    return total;

}

console.log(sum(1, 2, 3, 4));

// Keyword

const person = {

    name: "Hafisa",


    // Regular function

    regularMethod: function () {

        return this.name;

    },


    // Arrow function

    arrowMethod: () => {

        return this.name;

    }

};


console.log(person.regularMethod());

console.log(person.arrowMethod());