let Product = [
    {
        id : 6701,
        name : "Sony WH-1000XM5",
        image : "./Images/Sony Headphones.png",
        description : "Industry-leading noise canceling headphones with exceptional sound quality.",
        price : 349.99,
        status : "New"
    },

    {
        id : 6702,
        name : "Nike Air Zoom Pegasus 40",
        image : "./Images/Nike Running Shoes.png",
        description : "Lightweight and comfortable running shoes for everyday performance.",
        price : 129.99,
        status : "Old"
    },

    {
        id : 6703,
        name : "Samsung Galaxy Watch 6",
        image : "./Images/Samsung Galaxy Watch 6.png",
        description : "Track your fitness, health and more with a stunning AMOLED display.",
        price : 299.99,
        status : "New"
    },

    {
        id : 6704,
        name : "The North Face Borealis Backpack",
        image : "./Images/The North Face Backpack.png",
        description : "Spacious and durable backpack for work, travel, and everyday use.",
        price : 89.99,
        status : "Old"
    },

    {
        id : 6705,
        name : "iPhone 15 Pro",
        image : "./Images/iPhone 15 Pro.png",
        description : "A more powerful, more capable iPhone with a titanium design and stunning camera system.",
        price : 999.99,
        status : "New"
    },

    {
        id : 6706,
        name : "JBL Charge 5",
        image : "./Images/JBL Speaker.png",
        description : "Powerful sound, deep bass, and all-day playtime for your adventures.",
        price : 179.99	,
        status : "Old"
    }
];



// Selecting HTML elements
let productContainer = document.getElementById("product-container");
let statusDropdown = document.getElementById("product-status");

// Function to display products
function displayProducts() {

    // Get selected dropdown value
    let selectedStatus = statusDropdown.value;

    // Filter products based on status
    let filteredProducts = Product.filter((item) => {

        if (selectedStatus === "All") {
            return true;
        }
        else {
            return item.status === selectedStatus;
        }

    });

    // Generate product cards
    let cards = filteredProducts.map((item) => {

        return `
            <div class="product-card">

                <img src="${item.image}" alt="${item.name}">

                <span class="status ${item.status.toLowerCase()}">
                    ${item.status}
                </span>

                <h3>${item.name}</h3>

                <p>${item.description}</p>

                <h4>$${item.price}</h4>

                <div class="buttons">

                    <button class="buy-btn">
                        Buy
                    </button>

                    <button class="delete-btn" data-id="${item.id}">
                        Delete
                    </button>

                </div>

            </div>
        `;
    });

    // Display generated cards
    productContainer.innerHTML = cards.join("");
}

statusDropdown.addEventListener("change", function() {
    displayProducts();
});

// Display all products initially
displayProducts();


// Delete product functionality

productContainer.addEventListener("click", function(event) {

    // Check whether Delete button was clicked
    if (event.target.classList.contains("delete-btn")) {

        // Get product ID from the button
        let productId = Number(event.target.dataset.id);

        // Remove selected product from array
        Product = Product.filter((item) => {
            return item.id !== productId;
        });

        // Display remaining products
        displayProducts();
    }

});

   
