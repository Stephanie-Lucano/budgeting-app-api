// DEPENDENCIES
const express = require("express");

// CONFIGURATION
const app = express();

// ROUTES
app.get("/", (request, response) => {
    response.send("Welcome to Budgeting App");
});

// EXPORT
module.exports = app;