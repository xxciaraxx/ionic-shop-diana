const express = require("express");
const app = express();
const PORT = 3000;

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to My Shopping App Server!");
});

// Products route
app.get("/products", (req, res) => {
  res.json([
    { id: 1, name: "Running Shoes", price: 1999, category: "Fashion" },
    { id: 2, name: "Bluetooth Speaker", price: 1499, category: "Gadgets" },
    { id: 3, name: "Desk Lamp", price: 499, category: "Home" },
    { id: 4, name: "Mini Fan", price: 299, category: "Home" },
    { id: 5, name: "Black Shoes", price: 499, category: "Fashion" },
    { id: 6, name: "Smartphone", price: 3999, category: "Gadgets" }
  ]);
});

// Cart route
app.get("/cart", (req, res) => {
  res.json([
    { id: 1, product: "Running Shoes", quantity: 2, total: 3998 },
    { id: 2, product: "Smartphone", quantity: 1, total: 3999 },
    { id: 3, product: "Desk Lamp", quantity: 3, total: 1497 }
  ]);
});

// Profile route
app.get("/profile", (req, res) => {
  res.json({
    name: "Sofia Garcia",
    role: "Customer",
    address: "Tagudin, Ilocos Sur"
  });
});

//Wishlist route
app.get("/wishlist", (req, res) => {
  res.json([
    { id: 1, product: "Mini Fan", price: 299, category: "Home" },
    { id: 2, product: "Black Shoes", price: 499, category: "Fashion" }
  ]);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
