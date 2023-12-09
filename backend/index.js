import express from "express";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config.js";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from 'cors';

// CREATING AN INSTANCE OF EXPRESS
const app = express();

// ADDING MIDDLEWARE FOR PARSING REQUEST BODY
app.use(express.json());

app.get('/', (req, res) => {
    // console.log(req);
    return res.status(234).send('Welcome To Our Book Store');
});

// ADDING MIDDLEWARE FOR HANDLING CORS POLICY

// "📝 CORS (Cross-Origin Resource Sharing) is a security feature implemented by web browsers that restricts web pages from making requests to a different domain than the one that served the web page. It helps prevent potential security vulnerabilities by enforcing a same-origin policy. 🌟"

// ⦿ OPTION - 1: Allow all origins with default of CORS(*)
// app.use(cors());

// ⦿ OPTION - 2: Allow custom origins - (MORE CONVENIENT ✅)
app.use(
    cors({
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type'],
    })
);

// ADDING MIDDLEWARE FOR "/books" 
app.use('/books', booksRoute);

// CONNECTING TO DATABASE
mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('✅ App Successfully Connected to Database');
        app.listen(PORT, () => {
            console.log(`✅ App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });