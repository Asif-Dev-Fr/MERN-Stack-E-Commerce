import data from './data';

const express = require('express');
const app = express();

app.get("/api/products", (req, res) => {
    res.send(data.products)
});

const PORT = 5000

app.listen(PORT, 
    () =>  {
        console.log(`Server started at the port ${PORT}`)
    });