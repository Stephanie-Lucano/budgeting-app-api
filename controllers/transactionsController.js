// DEPENDENCIES
const { response } = require("express")
const express = require("express")
const transactionsArr = require("../models/transaction")

// CONFIGURATION
const transactions = express.Router()

// CUSTOM MIDDLEWARE
const validateURL = (request, response, next) => {
    if (request.body.url.substring(0, 7) == "http://" ||
    request.body.url.substring(0, 7) === "https://") {
        return next()
    } else {
        response
            .status(400)
            .send("Oops, you forgot to start your url with http:// or https://")
    }
}

// ROUTES
// Index
transactions.get("/", (request, response) => {
    response
        .status(200)
        .json(transactionsArr)
})
// Show
transactions.get("/:arrayIndex", (request, response) => {
    const { arrayIndex } = request.params
    transactionsArr[arrayIndex]
    ? response.json(transactionsArr[arrayIndex])
    : response.redirect("/404")
})
// Update
transactions.put("/:arrayIndex", (request, response) => {
    const { arrayIndex } = request.params
    transactionsArr[arrayIndex]  = request.body
    response.status(200).json(transactionsArr[arrayIndex])
})
// Create
transactions.post("/", validateURL , (request, response) => {
    const updatedArr = transactionsArr.push(request.body)
    response.status(200).json(transactionsArr[updatedArr-1])
})
// Delete
transactions.delete("/:indexArr", (request, response) => {
    const { indexArr } = request.params
    const deleteTransaction = transactionsArr.splice(indexArr, 1)
    response.status(200).json(deleteTransaction)
})

module.exports = transactions