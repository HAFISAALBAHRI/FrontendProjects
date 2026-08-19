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