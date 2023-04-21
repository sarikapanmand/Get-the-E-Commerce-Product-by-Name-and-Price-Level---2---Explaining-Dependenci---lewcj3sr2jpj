const fs = require("fs");
const express = require("express");
const app = express();

// Importing products from products.json file
const products = JSON.parse(fs.readFileSync(`${__dirname}/data/products.json`));

//Middlewares
app.get("/api/v1/products/:id", (req, res) => {
    const ix = req.params.id;
    console.log(ix);
    let val = products.find((item) => {
        return item.id == ix;
    });

    if (val) {
        console.log(val);
        res.status(200).json({
            status: "success",
            message: "Product fetched successfully",
            data: {
                product: val
            }
        });
    } 
    else {
        res.status(404).json({ status: "failed", message: "Product not found!" });
    }
});

app.use(express.json());

// GET endpoint for sending the products to client by id
//// Endpoint - /api/v1/products/:id

module.exports = app;
