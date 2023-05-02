const router = require("express").Router();
const { faker } = require("@faker-js/faker");

const Products = require("../model/product.model")

router.get("/products", (req, res) => {
    res.send("I am a Router")
});

router.get("/products", (req, res) => {
    res.send("I am a Router")
});

router.post("/products", async (req, res) => {
    await Products.sync()
    const createProduct = await Products.create({
        product_name: faker.commerce.product(),
        price: faker.commerce.price(),
        is_stock: faker.datatype.boolean()
    })
    res.status(201).json({
        ok: true,
        status: 201,
        message: "Create Product"
    })
});

router.put("/products", (req, res) => {
    res.send("I am a Router")
});

router.delete("/products", (req, res) => {
    res.send("I am a Router")
});

module.exports = router;