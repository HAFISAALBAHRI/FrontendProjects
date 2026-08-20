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

// ==========================================
// 2.2 DESTRUCTURING
// ==========================================


// Given order object
const order = {
    id: 101,
    customer: "Sara Ahmed",
    total: 249.99,
    status: "Shipped"
};


// ------------------------------------------
// Object Destructuring
// ------------------------------------------

const { customer, total } = order;

console.log(customer);
console.log(total);

// Output:
// Sara Ahmed
// 249.99



// ------------------------------------------
// Array Destructuring + Rest
// ------------------------------------------

const numbers = [10, 20, 30, 40, 50];

const [firstNumber, secondNumber, ...remainingNumbers] = numbers;

console.log(firstNumber);
console.log(secondNumber);
console.log(remainingNumbers);

// Output:
// 10
// 20
// [30, 40, 50]



// ------------------------------------------
// Destructuring in Function Parameters
// ------------------------------------------

function orderSummary({ id, customer, total, status }) {

    return `Order ${id} - ${customer} - ${total} OMR - ${status}`;
}


console.log(orderSummary(order));

// Output:
// Order 101 - Sara Ahmed - 249.99 OMR - Shipped

// ==========================================
// 2.3 SPREAD & REST
// ==========================================


// ------------------------------------------
// Combine Arrays Using Spread
// ------------------------------------------

const onlineOrders = [101, 102, 103];

const storeOrders = [104, 105, 106];

const allOrderIds = [
    ...onlineOrders,
    ...storeOrders
];

console.log(allOrderIds);

// Output:
// [101, 102, 103, 104, 105, 106]



// ------------------------------------------
// Copy Object and Change Status
// ------------------------------------------

const originalOrder = {
    id: 201,
    customer: "Maha Ali",
    total: 175,
    status: "Pending"
};


const cancelledOrder = {
    ...originalOrder,
    status: "Cancelled"
};


console.log(originalOrder);
console.log(cancelledOrder);

// Output:
// { id: 201, customer: "Maha Ali", total: 175, status: "Pending" }

// { id: 201, customer: "Maha Ali", total: 175, status: "Cancelled" }



// ------------------------------------------
// Rest Parameter
// ------------------------------------------

function collectTotals(...totals) {

    return totals;
}


console.log(
    collectTotals(25, 50, 75, 100)
);

// Output:
// [25, 50, 75, 100]

// ==========================================
// 2.4 ARRAY METHODS
// ==========================================

const orders = [
    { id: 1, customer: "Sara", total: 120, status: "Shipped" },
    { id: 2, customer: "Ahmed", total: 250, status: "Pending" },
    { id: 3, customer: "Maha", total: 85, status: "Cancelled" },
    { id: 4, customer: "Ali", total: 310, status: "Shipped" },
    { id: 5, customer: "Fatma", total: 150, status: "Pending" },
    { id: 6, customer: "Omar", total: 90, status: "Shipped" },
    { id: 7, customer: "Noor", total: 220, status: "Cancelled" },
    { id: 8, customer: "Maryam", total: 180, status: "Shipped" }
];


// ------------------------------------------
// reduce()
// Combined total of all orders
// ------------------------------------------

const combinedTotal = orders.reduce(
    (sum, order) => sum + order.total,
    0
);

console.log(combinedTotal);

// Output:
// 1405



// ------------------------------------------
// filter()
// Only shipped orders
// ------------------------------------------

const shippedOrders = orders.filter(
    order => order.status === "Shipped"
);

console.log(shippedOrders);

// Output:
// [
//   { id: 1, customer: "Sara", total: 120, status: "Shipped" },
//   { id: 4, customer: "Ali", total: 310, status: "Shipped" },
//   { id: 6, customer: "Omar", total: 90, status: "Shipped" },
//   { id: 8, customer: "Maryam", total: 180, status: "Shipped" }
// ]



// ------------------------------------------
// map()
// Array of customer names
// ------------------------------------------

const customerNames = orders.map(
    order => order.customer
);

console.log(customerNames);

// Output:
// ["Sara", "Ahmed", "Maha", "Ali", "Fatma", "Omar", "Noor", "Maryam"]



// ------------------------------------------
// find()
// First order over 200
// ------------------------------------------

const firstOrderOver200 = orders.find(
    order => order.total > 200
);

console.log(firstOrderOver200);

// Output:
// { id: 2, customer: "Ahmed", total: 250, status: "Pending" }



// ------------------------------------------
// some()
// Check if any order is Cancelled
// ------------------------------------------

const hasCancelledOrder = orders.some(
    order => order.status === "Cancelled"
);

console.log(hasCancelledOrder);

// Output:
// true



// ------------------------------------------
// every()
// Check if all totals are greater than 0
// ------------------------------------------

const allTotalsPositive = orders.every(
    order => order.total > 0
);

console.log(allTotalsPositive);

// Output:
// true



// ------------------------------------------
// sort()
// Sort highest total first
// ------------------------------------------

const sortedOrders = [...orders].sort(
    (a, b) => b.total - a.total
);

console.log(sortedOrders);

// Output:
// [
//   { id: 4, customer: "Ali", total: 310, status: "Shipped" },
//   { id: 2, customer: "Ahmed", total: 250, status: "Pending" },
//   { id: 7, customer: "Noor", total: 220, status: "Cancelled" },
//   { id: 8, customer: "Maryam", total: 180, status: "Shipped" },
//   { id: 5, customer: "Fatma", total: 150, status: "Pending" },
//   { id: 1, customer: "Sara", total: 120, status: "Shipped" },
//   { id: 6, customer: "Omar", total: 90, status: "Shipped" },
//   { id: 3, customer: "Maha", total: 85, status: "Cancelled" }
// ]



// ------------------------------------------
// Chain filter() + map()
// ------------------------------------------

const shippedCustomers = orders
    .filter(order => order.status === "Shipped")
    .map(order => order.customer);

console.log(shippedCustomers);

// Output:
// ["Sara", "Ali", "Omar", "Maryam"]

