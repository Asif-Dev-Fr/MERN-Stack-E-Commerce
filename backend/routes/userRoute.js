import express from 'express';
import User from '../models/userModel';
import dotenv from 'dotenv';

const router = express.Router();

router.get("/createadmin", async(req,res) => {
    try {

        const user = new User({
            name: 'Asif',
            email: 'asif.k.dev@gmail.com',
            password: process.env.PASSWORD,
            isAdmin: true,
    
        });
    
        const newUser = await user.save();
        res.send(newUser);
    }
    catch(error) {
        res.send({
            message: error.message
        });
    };
    
});

export default router;