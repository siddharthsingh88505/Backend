import express from "express"
import dotenv from "dotenv"
import { router } from "./routes/web.js"
import { connectDb } from "./db/connectDb.js";
import cors from "cors";
import bodyParser from "body-parser";

// configure dotenv
dotenv.config();

// initialize app
const app = express();

// static file load
app.use(express.static("frontend"));

// allow cors
app.use(cors());

// get form encoded
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// load routes
app.use("/", router);

// template engine
app.set("view engine", "ejs");

// connecting database
connectDb("mongodb+srv://siddharthsingh88505:1234@cluster0.1vdh0uk.mongodb.net/?retryWrites=true&w=majority");

// listen to browser port
app.listen(process.env.PORT, () => {
    console.log(`App is listening at http://localhost:${process.env.PORT} `)
})