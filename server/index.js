import express from "express";
import bodyParser from "body-parser";
import cors from "cors"
import Routes from "./Routes/Routes.js";
import mongoose, { Mongoose } from "mongoose";

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(Routes)

mongoose.set("strictQuery", true)

const CONNECTION_URL = `mongodb+srv://doritozz349:SN86HwLiRZfBUKtE@cluster0.syvd46i.mongodb.net/?retryWrites=true&w=majority`

const PORT = process.env.PORT || 4000

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
    })
     .then(() => app.listen(PORT, () => {
        console.log(`Server running on port: ${PORT}`)
     }))
     .catch((error) => {
        console.log(error)
    }) 
