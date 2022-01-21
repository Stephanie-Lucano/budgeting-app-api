// DEPENDENCIES
const express = require("express");
const cors = require("cors")
const transactionsController = require("./controllers/transactionsController")

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors())
app.use(express.json())
app.use("/transactions", transactionsController)

// ROUTES
app.get("/", (request, response) => {
    response.send("Welcome to Budgeting App");
});

app.get("*", (request, response) => {
    response.status(404).send("Page not found")
})

// EXPORT
module.exports = app;