import dotenv from "dotenv";
dotenv.config();
import express, { Router } from "express";
import Connection from "./database/db.js";
import { defaultData } from "./default.js";
import cors from 'cors';
import router from "./routes/route.js";
import Razorpay from 'razorpay';

const app = express();

app.use("/images", express.static("public/images"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', router);

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);

// defaultData();

export var instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

const port = 8000;
app.listen(port, () => {
  console.log(`app listening to port ${port}`)
});



