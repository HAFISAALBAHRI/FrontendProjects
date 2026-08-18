// 1. Local Data

const products = [
    {
        name: "Wireless Mouse",
        price: 8.500,
        stock: 18,
        category: "Accessories"
    },

    {
        name: "Mechanical Keyboard",
        price: 22.900,
        stock: 7,
        category: "Accessories"
    },

    {
        name: "USB-C Hub",
        price: 14.750,
        stock: 5,
        category: "Accessories"
    },

    {
        name: "Monitor",
        price: 54.000,
        stock: 12,
        category: "Displays"
    },

    {
        name: "Laptop Stand",
        price: 11.250,
        stock: 4,
        category: "Office"
    },

    {
        name: "Webcam",
        price: 19.900,
        stock: 15,
        category: "Video"
    }
];

// 2. Rendering

const renderProductCard = (product) => {

    return `
        <div class="col-12 col-md-6 col-lg-4 mb-3">

            <div class="card h-100">

                <div class="card-body">

                    <h5 class="card-title">
                        ${product.name}
                    </h5>

                    <p class="card-text">
                        Category: ${product.category}
                    </p>

                    <p class="card-text">
                        Price: OMR ${product.price}
                    </p>

                    <p class="card-text">
                        Stock: ${product.stock}
                    </p>

                </div>

            </div>

        </div>
    `;
};
function renderProducts(list) {

    document.getElementById("productList").innerHTML = list
        .map(renderProductCard)
        .join("");

}

//renderProducts(products);
// 3. Computed Summary

function calculateSummary(list) {

    let totalValue = 0;

    let lowStockCount = 0;


    for (const product of list) {

        totalValue = totalValue + (product.price * product.stock);


        if (product.stock < 10) {

            lowStockCount = lowStockCount + 1;

        }

    }


    document.getElementById("totalInventoryValue").textContent =
        `OMR ${totalValue.toFixed(3)}`;


    document.getElementById("lowStockCount").textContent =
        lowStockCount;

}
///calculateSummary(products);
// 4. Low Stock Toggle

let showingLowStockOnly = false;


document.getElementById("lowStockBtn").addEventListener(
    "click",
    function () {

        showingLowStockOnly = !showingLowStockOnly;


        if (showingLowStockOnly) {

            const lowStockProducts = [];


            for (const product of products) {

                if (product.stock < 10) {

                    lowStockProducts.push(product);

                }

            }


            renderProducts(lowStockProducts);


            this.textContent = "Show All Products";

        }
        else {

            renderProducts(products);


            this.textContent = "Show Low Stock Only";

        }

    }
);
renderProducts(products);

calculateSummary(products);