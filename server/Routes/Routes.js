import express from "express";
import UserModel from "../models/User.js";
import brcypt from "bcryptjs"

const Router = express.Router()

Router.post("/register", async function(req, res) {
    const User = req.body;
    const encryptedPassword = await brcypt.hash(User.password, 12)
    User.password = encryptedPassword
    const newUser = new UserModel(User)
    try {
        const userDoc = await newUser.save()
        res.status(201).json(userDoc)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
})

export default Router