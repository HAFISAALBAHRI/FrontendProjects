// ==========================================
// 2.1 ARRAYS - THE BASICS
// ==========================================

let cities = [
    "Muscat",
    "Dubai",
    "Abu Dhabi",
    "Doha",
    "Riyadh",
    "Kuwait City"
];

console.log("Original array:");
console.log(cities);

// Output:
// ["Muscat", "Dubai", "Abu Dhabi", "Doha", "Riyadh", "Kuwait City"]


// push() - add to the end
cities.push("Manama");

console.log("After push:");
console.log(cities);

// Output:
// ["Muscat", "Dubai", "Abu Dhabi", "Doha", "Riyadh", "Kuwait City", "Manama"]


// pop() - remove from the end
cities.pop();

console.log("After pop:");
console.log(cities);

// Output:
// ["Muscat", "Dubai", "Abu Dhabi", "Doha", "Riyadh", "Kuwait City"]


// shift() - remove from the beginning
cities.shift();

console.log("After shift:");
console.log(cities);

// Output:
// ["Dubai", "Abu Dhabi", "Doha", "Riyadh", "Kuwait City"]


// unshift() - add to the beginning
cities.unshift("Muscat");

console.log("After unshift:");
console.log(cities);

// Output:
// ["Muscat", "Dubai", "Abu Dhabi", "Doha", "Riyadh", "Kuwait City"]


// Length before adding duplicate
console.log("Length before duplicate:");
console.log(cities.length);

// Output:
// 6


// Add duplicate city
cities.push("Dubai");

console.log("Length after duplicate:");
console.log(cities.length);

// Output:
// 7


console.log("Array with duplicate:");
console.log(cities);

// Output:
// ["Muscat", "Dubai", "Abu Dhabi", "Doha", "Riyadh", "Kuwait City", "Dubai"]


// Classic for loop
console.log("Classic for loop:");

for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}

// Output:
// Muscat
// Dubai
// Abu Dhabi
// Doha
// Riyadh
// Kuwait City
// Dubai


// for...of loop
console.log("for...of loop:");

for (const city of cities) {
    console.log(city);
}

// Output:
// Muscat
// Dubai
// Abu Dhabi
// Doha
// Riyadh
// Kuwait City
// Dubai