require("dotenv").config();

const express = require("express");

const app = express();
app.use(express.static('public'))

app.use(express.json());

// const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

// const storeItems= new Map([
    // [1, {priceInCents: 799, name: "Cheese Pizza", size: "Large"}],
    // [2, {priceInCents: 899, name: "Pepperoni Pizza", size: "Large"}],
    // [3, {priceInCents: 1499, name: "Supreme Pizza", size: "Large"}],
    // [4, {priceInCents: 999, name: "Hawaiian Pizza", size: "Large"}],
    // [5, {priceInCents: 1199, name: "Meat Lover Pizza", size: "Large"}],
    // [6, {priceInCents: 1199, name: "Vegetarian Pizza", size: "Large"}],
    // [7, {priceInCents: 699, name: "Spaghetti with Meatballs"}],
    // [8, {priceInCents: 699, name: "Lasagna"}],
    // [9, {priceInCents: 699, name: "Ravioli"}],
    // [10, {priceInCents: 499, name: "Chicken Parmesan Sandwich"}],
    // [11, {priceInCents: 499, name: "Cheese Salad", size: "Large"}],
    // [12, {priceInCents: 799, name: "Buffalo Wings"}],
// ]);

app.listen(3000);