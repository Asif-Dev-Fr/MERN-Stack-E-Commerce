import data from './data';

const express = require('express');
const app = express();

// DB :
import config from './config';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute';

dotenv.config();
const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(error => console.log(error.reason));

app.use("/api/users", userRoute);

/* ------ */


app.get("/api/products", (req, res) => {
    res.send(data.products)
});

app.get("/api/products/:id", (req, res) => {
    const productId = req.params.id;
    const product = data.products.find(value => value._id === productId);
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