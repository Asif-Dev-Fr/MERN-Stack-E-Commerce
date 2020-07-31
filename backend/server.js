import data from './data';

const express = require('express');
const app = express();

app.get("/api/products", (req, res) => {
    res.send(data.products)
});

app.get("/api/products/:id", (req, res) => {
    const productId = req.params.id;
    const product = data.products.find(value => value._id = productId);
    if(product) {
        res.send(product);
    } else {
        res.status(404).send({msg : "Product Not Found !"});
    }
});


const PORT = 5000

app.listen(PORT, 
    () =>  {
        console.log(`Server started at the port ${PORT}`)
    });