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



// ==========================================
// HTML ELEMENTS
// ==========================================

const totalRevenueElement =
    document.getElementById("totalRevenue");

const pendingCountElement =
    document.getElementById("pendingCount");

const shippedCountElement =
    document.getElementById("shippedCount");

const cancelledCountElement =
    document.getElementById("cancelledCount");

const highestOrderElement =
    document.getElementById("highestOrder");

const allHaveItemsElement =
    document.getElementById("allHaveItems");

const topOrdersElement =
    document.getElementById("topOrders");

const uniqueCustomersElement =
    document.getElementById("uniqueCustomers");

const statusFilter =
    document.getElementById("statusFilter");

const searchInput =
    document.getElementById("searchInput");

const discountToggle =
    document.getElementById("discountToggle");

const orderList =
    document.getElementById("orderList");



// ==========================================
// 3.2 PER-ORDER TOTAL
// ==========================================

function calculateOrderTotal(order) {

    return order.items.reduce(
        (sum, item) =>
            sum + (item.price * item.quantity),
        0
    );
}



// ==========================================
// 3.3 DASHBOARD SUMMARY
// ==========================================

function renderSummary(orderArray) {

    // Total revenue
    const totalRevenue =
        orderArray.reduce(
            (sum, order) =>
                sum + calculateOrderTotal(order),
            0
        );


    // Pending count
    const pendingCount =
        orderArray.filter(
            order =>
                order.status === "Pending"
        ).length;


    // Shipped count
    const shippedCount =
        orderArray.filter(
            order =>
                order.status === "Shipped"
        ).length;


    // Cancelled count
    const cancelledCount =
        orderArray.filter(
            order =>
                order.status === "Cancelled"
        ).length;


    // Highest-value order
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


    // Check every order has at least one item
    const allOrdersHaveItems =
        orderArray.every(
            order =>
                order.items.length > 0
        );


    totalRevenueElement.textContent =
        `${totalRevenue.toFixed(3)} OMR`;


    pendingCountElement.textContent =
        pendingCount;


    shippedCountElement.textContent =
        shippedCount;


    cancelledCountElement.textContent =
        cancelledCount;


    highestOrderElement.textContent =
        `${highestOrder.customer} - ${calculateOrderTotal(highestOrder).toFixed(3)} OMR`;


    allHaveItemsElement.textContent =
        allOrdersHaveItems ? "Yes" : "No";
}



// ==========================================
// 3.4 TOP CUSTOMERS
// ==========================================

function renderTopOrders(orderArray) {

    const topThreeOrders =
        [...orderArray]
            .sort(
                (a, b) =>
                    calculateOrderTotal(b) -
                    calculateOrderTotal(a)
            )
            .slice(0, 3);


    topOrdersElement.innerHTML = "";


    topThreeOrders.forEach(order => {

        topOrdersElement.innerHTML += `
            <p>
                ${order.customer}
                -
                ${calculateOrderTotal(order).toFixed(3)} OMR
            </p>
        `;

    });
}



function renderUniqueCustomers(orderArray) {

    const customersOver150 =
        orderArray
            .filter(
                order =>
                    calculateOrderTotal(order) > 150
            )
            .map(
                order =>
                    order.customer
            );


    const uniqueCustomers =
        customersOver150.filter(
            (customer, index, array) =>
                array.indexOf(customer) === index
        );


    uniqueCustomersElement.innerHTML = "";


    uniqueCustomers.forEach(customer => {

        uniqueCustomersElement.innerHTML += `
            <p>${customer}</p>
        `;

    });
}



// ==========================================
// 3.5 FILTERING & SEARCH
// ==========================================

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


        return (
            matchesStatus &&
            matchesSearch
        );

    });
}



// ==========================================
// 3.6 IMMUTABLE DISCOUNT PREVIEW
// ==========================================

function createDiscountedOrders(orderArray) {

    return orderArray.map(order => {

        return {

            // Copy the order
            ...order,

            // Create a new items array
            items: order.items.map(item => {

                return {

                    // Copy each item
                    ...item,

                    // Reduce the price by 15%
                    price: item.price * 0.85

                };

            })

        };

    });
}



// ==========================================
// 3.7 RENDERING
// ==========================================

// Destructuring directly in function parameters
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

                        <strong>
                            Customer:
                        </strong>

                        ${customer}

                    </p>


                    <p class="card-text">

                        <strong>
                            Status:
                        </strong>

                        ${status}

                    </p>


                    <p class="card-text">

                        <strong>
                            Date:
                        </strong>

                        ${date}

                    </p>


                    <p class="card-text">

                        <strong>
                            Items:
                        </strong>

                        ${items.length}

                    </p>


                    <p class="card-text">

                        <strong>
                            Total:
                        </strong>

                        ${total.toFixed(3)} OMR

                    </p>


                </div>

            </div>

        </div>
    `;
}



function renderOrders(orderArray) {

    const filteredOrders =
        getFilteredOrders(orderArray);


    orderList.innerHTML = "";


    filteredOrders.forEach(order => {

        orderList.innerHTML +=
            createOrderCard(order);

    });

}



// ==========================================
// UPDATE DASHBOARD
// ==========================================

function updateDashboard() {

    let currentOrders;


    if (discountToggle.checked) {

        currentOrders =
            createDiscountedOrders(orders);

    }

    else {

        currentOrders = orders;

    }


    renderSummary(currentOrders);

    renderTopOrders(currentOrders);

    renderUniqueCustomers(currentOrders);

    renderOrders(currentOrders);
}



// ==========================================
// EVENTS
// ==========================================

// Filter by status
statusFilter.addEventListener(
    "change",
    updateDashboard
);


// Search while typing
searchInput.addEventListener(
    "input",
    updateDashboard
);


// Discount preview
discountToggle.addEventListener(
    "change",
    updateDashboard
);



// ==========================================
// FIRST PAGE LOAD
// ==========================================

updateDashboard();