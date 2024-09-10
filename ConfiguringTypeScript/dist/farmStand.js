"use strict";
const productDetails = (product) => {
    console.log(`You can purchase ${product.name} at ${product.price} only!`);
};
productDetails({ name: "book-shell", price: 7800, id: 3112 });
productDetails({ name: "shell", price: 700, id: 3912 });
