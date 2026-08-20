// ==========================================
// 3.1 LOCAL DATA
// ==========================================

const orders = [

    {
        id: 101,
        customer: "Sara Ahmed",
        status: "Shipped",
        date: "2026-08-01",
        items: [
            { product: "Laptop Bag", price: 25, quantity: 2 },
            { product: "Mouse", price: 15, quantity: 1 }
        ]
    },

    {
        id: 102,
        customer: "Ahmed Ali",
        status: "Pending",
        date: "2026-08-02",
        items: [
            { product: "Keyboard", price: 30, quantity: 2 },
            { product: "Monitor", price: 120, quantity: 1 }
        ]
    },

    {
        id: 103,
        customer: "Maha Salim",
        status: "Cancelled",
        date: "2026-08-03",
        items: [
            { product: "Speaker", price: 40, quantity: 2 }
        ]
    },

    {
        id: 104,
        customer: "Omar Khalid",
        status: "Shipped",
        date: "2026-08-04",
        items: [
            { product: "Monitor", price: 120, quantity: 2 },
            { product: "Keyboard", price: 30, quantity: 1 }
        ]
    },

    {
        id: 105,
        customer: "Noor Said",
        status: "Pending",
        date: "2026-08-05",
        items: [
            { product: "Headphones", price: 45, quantity: 2 },
            { product: "Mouse Pad", price: 10, quantity: 1 }
        ]
    },

    {
        id: 106,
        customer: "Fatma Hassan",
        status: "Shipped",
        date: "2026-08-06",
        items: [
            { product: "Printer", price: 85, quantity: 2 }
        ]
    },

    {
        id: 107,
        customer: "Sara Ahmed",
        status: "Pending",
        date: "2026-08-07",
        items: [
            { product: "Webcam", price: 35, quantity: 2 },
            { product: "Microphone", price: 60, quantity: 2 }
        ]
    },

    {
        id: 108,
        customer: "Ali Mohammed",
        status: "Cancelled",
        date: "2026-08-08",
        items: [
            { product: "USB Cable", price: 8, quantity: 3 }
        ]
    },

    {
        id: 109,
        customer: "Maryam Said",
        status: "Shipped",
        date: "2026-08-09",
        items: [
            { product: "Tablet", price: 180, quantity: 1 },
            { product: "Tablet Cover", price: 20, quantity: 1 }
        ]
    },

    {
        id: 110,
        customer: "Khalid Omar",
        status: "Pending",
        date: "2026-08-10",
        items: [
            { product: "Smart Watch", price: 95, quantity: 2 }
        ]
    },

    {
        id: 111,
        customer: "Aisha Salem",
        status: "Shipped",
        date: "2026-08-11",
        items: [
            { product: "Phone", price: 250, quantity: 1 },
            { product: "Phone Case", price: 15, quantity: 2 }
        ]
    },

    {
        id: 112,
        customer: "Noor Said",
        status: "Cancelled",
        date: "2026-08-12",
        items: [
            { product: "Earbuds", price: 50, quantity: 1 }
        ]
    },

    {
        id: 113,
        customer: "Huda Ali",
        status: "Pending",
        date: "2026-08-13",
        items: [
            { product: "Office Chair", price: 140, quantity: 1 },
            { product: "Desk Lamp", price: 25, quantity: 1 }
        ]
    },

    {
        id: 114,
        customer: "Salim Rashid",
        status: "Shipped",
        date: "2026-08-14",
        items: [
            { product: "Gaming Keyboard", price: 75, quantity: 1 },
            { product: "Gaming Mouse", price: 55, quantity: 1 },
            { product: "Headset", price: 80, quantity: 1 }
        ]
    },

    {
        id: 115,
        customer: "Laila Ahmed",
        status: "Pending",
        date: "2026-08-15",
        items: [
            { product: "Laptop Stand", price: 35, quantity: 2 },
            { product: "Keyboard", price: 30, quantity: 1 }
        ]
    }

];

console.log(orders);

// Output:
// Array(15) containing the 15 order objects above.

// ==========================================
// 3.2 PER-ORDER TOTAL
// ==========================================

function calculateOrderTotal(order) {

    return order.items.reduce(
        (sum, item) => sum + (item.price * item.quantity),
        0
    );
}


// Test the function
console.log(calculateOrderTotal(orders[0]));

// Output:
// 65

// ==========================================
// 3.3 DASHBOARD SUMMARY NUMBERS
// ==========================================


// ------------------------------------------
// Total Revenue
// ------------------------------------------

const totalRevenue = orders.reduce(
    (sum, order) => sum + calculateOrderTotal(order),
    0
);

console.log("Total Revenue:");
console.log(totalRevenue);

// Output:
// 2294



// ------------------------------------------
// Number of Pending Orders
// ------------------------------------------

const pendingCount = orders.filter(
    order => order.status === "Pending"
).length;

console.log("Pending Orders:");
console.log(pendingCount);

// Output:
// 6



// ------------------------------------------
// Number of Shipped Orders
// ------------------------------------------

const shippedCount = orders.filter(
    order => order.status === "Shipped"
).length;

console.log("Shipped Orders:");
console.log(shippedCount);

// Output:
// 6



// ------------------------------------------
// Number of Cancelled Orders
// ------------------------------------------

const cancelledCount = orders.filter(
    order => order.status === "Cancelled"
).length;

console.log("Cancelled Orders:");
console.log(cancelledCount);

// Output:
// 3



// ------------------------------------------
// Highest-Value Order
// ------------------------------------------

const highestOrder = orders.reduce(
    (highest, current) => {

        if (
            calculateOrderTotal(current) >
            calculateOrderTotal(highest)
        ) {
            return current;
        }

        return highest;
    }
);

console.log("Highest Value Order:");
console.log(highestOrder.customer);
console.log(calculateOrderTotal(highestOrder));

// Output:
// Aisha Salem
// 280



// ------------------------------------------
// Check Every Order Has At Least One Item
// ------------------------------------------

const allOrdersHaveItems = orders.every(
    order => order.items.length > 0
);

console.log("Every order has at least one item:");
console.log(allOrdersHaveItems);

// Output:
// true

// ==========================================
// 3.4 TOP CUSTOMERS
// ==========================================


// ------------------------------------------
// Top 3 Highest-Value Orders
// ------------------------------------------

const topThreeOrders = [...orders]
    .sort(
        (a, b) =>
            calculateOrderTotal(b) -
            calculateOrderTotal(a)
    )
    .slice(0, 3);


console.log("Top 3 Orders:");

topThreeOrders.forEach(order => {

    console.log(
        order.customer,
        calculateOrderTotal(order)
    );

});

// Output:
// Aisha Salem 280
// Omar Khalid 270
// Salim Rashid 210



// ------------------------------------------
// Unique Customers With Order Over 150
// ------------------------------------------

const customersOver150 = orders
    .filter(
        order =>
            calculateOrderTotal(order) > 150
    )
    .map(
        order => order.customer
    );


const uniqueCustomers = customersOver150.filter(
    (customer, index, array) =>
        array.indexOf(customer) === index
);


console.log("Unique Customers Over 150:");

console.log(uniqueCustomers);

// Output:
// [
//   "Ahmed Ali",
//   "Omar Khalid",
//   "Fatma Hassan",
//   "Sara Ahmed",
//   "Maryam Said",
//   "Khalid Omar",
//   "Aisha Salem",
//   "Huda Ali",
//   "Salim Rashid"
// ]

// ==========================================
// 3.5 FILTERING & SEARCH
// ==========================================


// Get the HTML elements
const statusFilter =
    document.getElementById("statusFilter");

const searchInput =
    document.getElementById("searchInput");



// ------------------------------------------
// Filter Function
// ------------------------------------------

function getFilteredOrders(orderArray) {

    const selectedStatus =
        statusFilter.value;

    const searchText =
        searchInput.value
            .trim()
            .toLowerCase();


    return orderArray.filter(order => {

        const matchesStatus =
            selectedStatus === "All" ||
            order.status === selectedStatus;


        const matchesSearch =
            order.customer
                .toLowerCase()
                .includes(searchText);


        return matchesStatus && matchesSearch;
    });
}

// ==========================================
// 3.6 IMMUTABLE DISCOUNT PREVIEW
// ==========================================

const discountToggle =
    document.getElementById("discountToggle");


// Create a completely new discounted array
function createDiscountedOrders(orderArray) {

    return orderArray.map(order => {

        return {

            // Copy the order object
            ...order,

            // Create a new items array
            items: order.items.map(item => {

                return {

                    // Copy each item object
                    ...item,

                    // Apply 15% discount
                    price: item.price * 0.85

                };

            })

        };

    });
}

// ==========================================
// 3.7 RENDERING
// ==========================================

const orderList =
    document.getElementById("orderList");


// Destructuring directly in the parameter
function createOrderCard(
    {
        id,
        customer,
        status,
        date,
        items
    }
) {

    const order = {
        id,
        customer,
        status,
        date,
        items
    };


    const total =
        calculateOrderTotal(order);


    return `
        <div class="col-md-6 col-lg-4">

            <div class="card h-100 shadow-sm">

                <div class="card-body">

                    <h5 class="card-title">
                        Order #${id}
                    </h5>


                    <p class="card-text">
                        <strong>Customer:</strong>
                        ${customer}
                    </p>


                    <p class="card-text">
                        <strong>Status:</strong>
                        ${status}
                    </p>


                    <p class="card-text">
                        <strong>Date:</strong>
                        ${date}
                    </p>


                    <p class="card-text">
                        <strong>Items:</strong>
                        ${items.length}
                    </p>


                    <p class="card-text">
                        <strong>Total:</strong>
                        ${total.toFixed(3)} OMR
                    </p>

                </div>

            </div>

        </div>
    `;
}
// ==========================================
// FINAL - UPDATE DASHBOARD
// ==========================================

function updateDashboard() {

    let currentOrders;


    // If discount is ON
    if (discountToggle.checked) {

        currentOrders =
            createDiscountedOrders(orders);

    }

    // If discount is OFF
    else {

        currentOrders = orders;

    }


    // Update summary numbers
    renderSummary(currentOrders);


    // Update top 3 orders
    renderTopOrders(currentOrders);


    // Update unique customers
    renderUniqueCustomers(currentOrders);


    // Update visible order cards
    renderOrders(currentOrders);
}


// ==========================================
// EVENT LISTENERS
// ==========================================

statusFilter.addEventListener(
    "change",
    updateDashboard
);

searchInput.addEventListener(
    "input",
    updateDashboard
);

discountToggle.addEventListener(
    "change",
    updateDashboard
);


// ==========================================
// FIRST PAGE LOAD
// ==========================================
// ==========================================
// RENDER TOP 3 ORDERS
// ==========================================

function renderTopOrders(orderArray) {

    const topThreeOrders = [...orderArray]
        .sort(
            (a, b) =>
                calculateOrderTotal(b) -
                calculateOrderTotal(a)
        )
        .slice(0, 3);


    const topOrders =
        document.getElementById("topOrders");


    topOrders.innerHTML = "";


    topThreeOrders.forEach(order => {

        topOrders.innerHTML += `
            <p>
                ${order.customer}
                -
                ${calculateOrderTotal(order).toFixed(3)} OMR
            </p>
        `;

    });
}
updateDashboard();

// ==========================================
// RENDER SUMMARY
// ==========================================

function renderSummary(orderArray) {

    const totalRevenue =
        orderArray.reduce(
            (sum, order) =>
                sum + calculateOrderTotal(order),
            0
        );


    const pendingCount =
        orderArray.filter(
            order => order.status === "Pending"
        ).length;


    const shippedCount =
        orderArray.filter(
            order => order.status === "Shipped"
        ).length;


    const cancelledCount =
        orderArray.filter(
            order => order.status === "Cancelled"
        ).length;


    const highestOrder =
        orderArray.reduce(
            (highest, current) => {

                if (
                    calculateOrderTotal(current) >
                    calculateOrderTotal(highest)
                ) {
                    return current;
                }

                return highest;
            }
        );


    const allOrdersHaveItems =
        orderArray.every(
            order => order.items.length > 0
        );


    document.getElementById("totalRevenue").textContent =
        `${totalRevenue.toFixed(3)} OMR`;


    document.getElementById("pendingCount").textContent =
        pendingCount;


    document.getElementById("shippedCount").textContent =
        shippedCount;


    document.getElementById("cancelledCount").textContent =
        cancelledCount;


    document.getElementById("highestOrder").textContent =
        `${highestOrder.customer} - ${calculateOrderTotal(highestOrder).toFixed(3)} OMR`;


    document.getElementById("allHaveItems").textContent =
        allOrdersHaveItems ? "Yes" : "No";
}

// ==========================================
// RENDER UNIQUE CUSTOMERS
// ==========================================

function renderUniqueCustomers(orderArray) {

    const customersOver150 =
        orderArray
            .filter(
                order =>
                    calculateOrderTotal(order) > 150
            )
            .map(
                order => order.customer
            );


    const uniqueCustomers =
        customersOver150.filter(
            (customer, index, array) =>
                array.indexOf(customer) === index
        );


    const uniqueCustomersElement =
        document.getElementById("uniqueCustomers");


    uniqueCustomersElement.innerHTML = "";


    uniqueCustomers.forEach(customer => {

        uniqueCustomersElement.innerHTML += `
            <p>${customer}</p>
        `;

    });
}