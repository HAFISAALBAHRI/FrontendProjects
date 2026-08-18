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