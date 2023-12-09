# **SMARTREAD** - *Books Management System* [ MERN Stack ]

![SmartRead Branding](frontend/src/assets/smartread(dark).png)
<!-- (add a small description about project) -->
SMARTREAD is a state-of-the-art web application designed to revolutionize the way individuals manage their book collections. As a comprehensive MERN stack solution, SMARTREAD seamlessly integrates MongoDB, Express.js, React.js, and Node.js to provide users with an intuitive and efficient platform for performing CRUD operations—Create, Read, Update, and Delete—on their books.

## Key Features -
- ### Intuitive User Interface:
    At the heart of SMARTREAD is an intuitive user interface that prioritizes simplicity and functionality. The clean design and thoughtful layout create a user-friendly environment, ensuring that users, regardless of their technical proficiency, can easily navigate the application.

- ### Comprehensive CRUD Operations:
    SMARTREAD empowers users to have full control over their book collections. Whether users are adding new books, updating existing entries, marking books as read, or removing entries, the application streamlines these processes, offering a seamless experience in managing their literary inventory.

- ### Multi-Platform Accessibility:
    SMARTREAD is designed with versatility in mind, ensuring a consistent experience across various devices and screen sizes. Whether accessed from a desktop, laptop, tablet, or smartphone, users can expect the same level of functionality and convenience, making their book management accessible anytime, anywhere.

- ### Detailed Book Insights:
    SMARTREAD offers users detailed insights into each book, including synopses, publication details, and reviews. Leveraging external databases, the application enriches book entries with comprehensive information, enabling users to make informed decisions about their reading choices.

## Mocks -

![SMARTREAD Mockups](project%20snapshots/Mocks.png)

## Tooling & Dependencies -
- **node.js (v21.3.0)** - * [PROD]
- **npm (10.2.4)** - * [PROD]
- **express.js (^4.18.2)** - Backend [PROD]
- **mongodb (Atlas)** - Database [PROD]
- **mongoose (^8.0.2)** - Backend [PROD]
- **nodemon (^3.0.2)** - Backend [DEV]
- **cors (^2.8.5)** - Backend [PROD]
- **react (^18.2.0)** - Frontend [PROD]
- **react-dom (^18.2.0)** - Frontend [PROD]
- **react-router-dom (^6.20.1)** - Frontend [PROD]
- **react-icons (^4.12.0)** - Frontend [PROD]
- **axios (^1.6.2)** - Frontend [PROD]
- **notistack (^3.0.1)** - Frontend [PROD]
- **@types/react (^18.2.37)** - Frontend [DEV]
- **@types/react-dom (^18.2.15)** - Frontend [DEV]
- **@vitejs/plugin-react-swc (^3.5.0)** - Frontend [DEV]
- **autoprefixer (^10.4.16)** - Frontend [DEV]
- **eslint (^8.53.0)** - Frontend [DEV]
- **eslint-plugin-react-hooks (^4.6.0)** - Frontend [DEV]
- **eslint-plugin-react-refresh (^0.4.4)** - Frontend [DEV]
- **postcss (^8.4.32)** - Frontend [DEV]
- **tailwindcss (^3.3.6)** - Frontend [DEV]
- **vite (^5.0.0)** - Frontend [DEV]

## Frontend & UI -
- ### Home (Table View) -
    ![SMARTREAD Home Table](project%20snapshots/Table%20View.png)

- ### Home (Card View) -
    ![SMARTREAD Home Card](project%20snapshots/Card%20View.png)

- ### Create Book -
    ![SMARTREAD Create Book](project%20snapshots/Create%20Book.png)

- ### Quick View a Book -
    ![SMARTREAD Quick View Book](project%20snapshots/Quick%20View.png)

- ### Book Info -
    ![SMARTREAD Book Info](project%20snapshots/Book%20Info.png)

- ### Edit / Update Book -
    ![SMARTREAD Edit Book](project%20snapshots/Edit%20Book.png)

- ### Delete Book -
    ![SMARTREAD Delete Book](project%20snapshots/Delete%20Book.png)

## Backend -
- Create a seperate folder for your backend.
- Move inside your newly created backend folder -

    ```
    cd backend
    ```

- Initialise your backend -

    ```
    npm init -y
    ```

- A **package.json** has been created 👍🏻
- Go to **package.json** and add **"type": "module"** *(This line will allow us to use ES6 syntax in our backend)* 🤘🏻
- Add **express** [*Framework*] to backend -

    ```
    npm i express
    ```

- Add **nodemon** [*Auto restart server on change*] to backend as a dev dependency -

    ```
    npm i -D nodemon
    ```

- Add these two scripts in **package.json**
    - **"start": "node index.js"** [*To start the server in node.js env*] [PROD]
    - **"dev": "nodemon index.js"** [*To start the server with nodemon*] [DEV]
- Create a new file named **index.js** [*Starter of backend server*]
- Create another file named **config.js** [*To store different configs related to backend*]
    - Add your PORT config -
        
        ```js
        export const PORT = 5555;
        ```
    
- Open **index.js** and create a server - 

    ```js
    import express from "express";
    import { PORT } from "./config.js";

    // MAKE AN INSTANCE OF EXPRESS
    const app = express();

    // MAKE THIS APP LISTEN ON PORT WITH A CUSTOM MESSAGE
    app.listen(PORT, () => {
        console.log(`✅ App is listening to port: ${PORT}`);
    });
    ```

- Run your server -

    ```
    npm run dev
    ```

- Now in console if you see the bellow message that means your server is running ✅

    ```
    raghav~$npm run dev

    > backend@1.0.0 dev
    > nodemon index.js

    [nodemon] 3.0.2
    [nodemon] to restart at any time, enter `rs`
    [nodemon] watching path(s): *.*
    [nodemon] watching extensions: js,mjs,cjs,json
    [nodemon] starting `node index.js`
    (node:24876) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
    (Use `node --trace-deprecation ...` to show where the warning was created)

    ✅ App is listening to port: 5555
    ```

- Create a route for "/" endpoint -

    ```js
    app.get('/', (req, res) => {
        // console.log(req);
        return res.status(234).send('Welcome To Our Book Store');
    });
    ```

- Visit **http://localhost:5555** and ```Welcome To Our Book Store``` will be displayed on the page. 👍🏻

- ### Add MongoDB and Mongoose to node js -
    - visit **https://mongodb.com** and click on **Sign In** button.
    - If you already have an account just login else signup and then login. 😂
    - Click on **Build a Database** and choose **Free M0** plan, select provider and region as per recommended by the MongoDB Atlas based on your location.
        - choose a name for your cluster (cluster 0) and click on **Create** button.
    - Add a **Username** and **Password** and click on **Create User** button.
    - Click on **Finish and Close** button.
    - Go to your database.
    - Click on **Connect** button to get your connection string.
        - Click on **MongoDB for VS Code** and copy the connection string.
    Open VS Code and in **config.js** add your connection string -

        ```js
        export const mongoDBURL = 'mongodb+srv://USERNAME:PASSWORD@cluster0.unoefgr.mongodb.net/books-collection'

        // Add your MongoDB User Username in place of USERNAME
        // Add your MongoDB User Password in place of PASSWORD
        // Add a collection name after your connection string like /books-collection
        ```

    - To work with MongoDB database we need **mongoose** library -

        > Mongoose is a MongoDB object modeling library for Node.js that provides a schema-based solution for interacting with MongoDB databases. It simplifies interactions with MongoDB by offering features like validation, type casting, and convenient abstractions for CRUD operations.

        ```
        npm i mongoose
        ```

    - Now import **mongoDBURL** in index.js -

        ```js
        import { PORT, mongoDBURL } from "./config.js";
        ```

    - Import **mongoose** in index.js -

        ```js
        import mongoose from "mongoose";
        ```

    - Let's connect our backend with mongoDB Database, also our server should only run when backend is successfully connected to database -

        ```js
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
        ```

    - Run your dev server and if you see success messages, your backend is successfully connected to database. 🚀

        ```
        raghav~$npm run dev

        > backend@1.0.0 dev
        > nodemon index.js

        [nodemon] 3.0.2
        [nodemon] to restart at any time, enter `rs`
        [nodemon] watching path(s): *.*
        [nodemon] watching extensions: js,mjs,cjs,json
        [nodemon] starting `node index.js`
        (node:25986) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
        (Use `node --trace-deprecation ...` to show where the warning was created)
        ✅ App Successfully Connected to Database
        ✅ App is listening to port: 5555
        ```

- ### Create Book Model with mongoose -

    > A data model defines the structure and organization of data within a database, specifying how data entities relate to each other. It serves as a blueprint for creating, storing, and managing data in a systematic and organized manner.

    - Create a new folder named **models** in backend folder.
    - Inside **models** folder create a new file as **bookModel.js** and add the following code -
        ```js
        import mongoose from "mongoose";

        const bookSchema = mongoose.Schema(
            {
                title: {
                    type: String,
                    required: true,
                },
                author: {
                    type: String,
                    required: true,
                },
                publishYear: {
                    type: Number,
                    required: true,
                },
            },
            {
                timestamps: true,
            }
        );

        export const Book = mongoose.model('Book', bookSchema);
        ```

- ### Save a new Book to Database using mongoose -
    - Import Book from bookModel in index.js -

        ```js
        import { Book } from "./models/bookModel.js";
        ```

    - To save a new Book we use POST method -

        ```js
        // ROUTE TO SAVE A NEW BOOK
        app.post('/books', async (req, res) => {
            try {
                if (
                    !req.body.title || 
                    !req.body.author || 
                    !req.body.publishYear
                ) {
                    return res.status(400).send({ message: 'Send all required fields: title, author, publishYear'})
                }

                const newBook = {
                    title: req.body.title,
                    author: req.body.author,
                    publishYear: req.body.publishYear,
                };

                const book = await Book.create(newBook);

                return res.status(201).send(book);

            } catch (error) {
                console.log(error.message);
                res.status(500).send({ message: error.message });
            }
        });
        ```

    - Add a middleware in index.js for parsing request body -

        ```js
        // ADDING MIDDLEWARE FOR PARSING REQUEST BODY
        app.use(express.json());
        ```

    - Test it using **Postman** 🚀
    - Also check for results in your mongoDB Collection ✅

- ### Get All Books From Database using mongoose -
    - To get all saved books we use GET method -

        ```js
        // ROUTE TO GET ALL BOOKS FROM DATABASE
        app.get('/books', async (req, res) => {
            try {
                const books = await Book.find({});

                return res.status(200).json({
                    count: books.length,
                    data: books
                });
            } catch (error) {
                console.log(error.message);
                res.status(500).send({ message: error.message });
            }
        });
        ```

    - Test it using **Postman** 🚀

- ### Get Single Book From Database using mongoose -
    - To get single book we use GET method and also we need id -

        ```js
        app.get('/books/:id', async (req, res) => {
            try {
                const { id } = req.params;
                const book = await Book.findById(id);

                return res.status(200).json(book);
            } catch (error) {
                console.log(error.message);
                res.status(500).send({ message: error.message });
            }
        });
        ```

    - Test it using **Postman** 🚀

- ### Update a Book in Database using mongoose -
    - To update a book we use PUT method and also we need id -

        ```js
        // ROUTE TO UPDATE A BOOK
        app.put('/books/:id', async (req, res) => {
            try {
                if (
                    !req.body.title ||
                    !req.body.author ||
                    !req.body.publishYear
                ) {
                    return res.status(400).send({
                        message: 'Send all required fields: title, author, publishYear'
                    });
                }

                const { id } = req.params;

                const result = await Book.findByIdAndUpdate(id, req.body);

                if (!result) {
                    return res.status(404).json({ message: 'Book not found' });
                }

                return res.status(200).send({ message: 'Book updated successfully' });
            } catch (error) {
                console.log(error.message);
                res.status(500).send({ message: error.message });
            }
        });
        ```

    - Test it using **Postman** 🚀
    - Also check for results in your mongoDB Collection ✅

- ### Delete a Book from Database using mongoose -
    - To delete a book we use DELETE method and also we need id -

        ```js
        app.delete('/books/:id', async (req, res) => {
            try {
                const { id } = req.params;

                const result = await Book.findByIdAndDelete(id);

                if (!result) {
                    return res.status(404).json({ message: 'Book not found' });
                }

                return res.status(200).send({ message: 'Book deleted successfully' });
            } catch (error) {
                console.log(error.message);
                res.status(500).send({ message: error.message });
            }
        });
        ```

    - Test it using **Postman** 🚀
    - Also check for results in your mongoDB Collection ✅

- ### Refactor Routes with express router -
    - Create a folder named **routes** in your backend folder.
    - Create a file in routes folder as **booksRoute.js**.
    - Cut all the routes present in **index.js** and paste it in **booksRoute.js** and modify as follows - 

        ```js
        import express from 'express';
        import { Book } from '../models/bookModel.js';

        const router = express.Router();

        // ROUTE TO SAVE A NEW BOOK
        router.post('/', async (req, res) => {
            try {
                if (
                    !req.body.title || 
                    !req.body.author || 
                    !req.body.publishYear
                ) {
                    return res.status(400).send({ message: 'Send all required fields: title, author, publishYear'})
                }

                const newBook = {
                    title: req.body.title,
                    author: req.body.author,
                    publishYear: req.body.publishYear,
                };

                const book = await Book.create(newBook);

                return res.status(201).send(book);

            } catch (error) {
                console.log(error.message);
                res.status(500).send({ message: error.message });
            }
        });

        // ROUTE TO GET ALL BOOKS FROM DATABASE
        router.get('/', async (req, res) => {
            try {
                const books = await Book.find({});

                return res.status(200).json({
                    count: books.length,
                    data: books
                });
            } catch (error) {
                console.log(error.message);
                res.status(500).send({ message: error.message });
            }
        });

        // ROUTE TO GET ONE BOOK FROM DATABASE BY ID
        router.get('/:id', async (req, res) => {
            try {
                const { id } = req.params;
                const book = await Book.findById(id);

                return res.status(200).json(book);
            } catch (error) {
                console.log(error.message);
                res.status(500).send({ message: error.message });
            }
        });

        // ROUTE TO UPDATE A BOOK
        router.put('/:id', async (req, res) => {
            try {
                if (
                    !req.body.title ||
                    !req.body.author ||
                    !req.body.publishYear
                ) {
                    return res.status(400).send({
                        message: 'Send all required fields: title, author, publishYear'
                    });
                }

                const { id } = req.params;

                const result = await Book.findByIdAndUpdate(id, req.body);

                if (!result) {
                    return res.status(404).json({ message: 'Book not found' });
                }

                return res.status(200).send({ message: 'Book updated successfully' });
            } catch (error) {
                console.log(error.message);
                res.status(500).send({ message: error.message });
            }
        });

        // ROUTE TO DELETE A BOOK
        router.delete('/:id', async (req, res) => {
            try {
                const { id } = req.params;

                const result = await Book.findByIdAndDelete(id);

                if (!result) {
                    return res.status(404).json({ message: 'Book not found' });
                }

                return res.status(200).send({ message: 'Book deleted successfully' });
            } catch (error) {
                console.log(error.message);
                res.status(500).send({ message: error.message });
            }
        });

        export default router;
        ```

    - Import **booksRoute** in index.js -

        ```js
        import booksRoute from "./routes/booksRoute.js";
        ```

    - Add a middleware for booksRoute in index.js -

        ```js
        // ADDING MIDDLEWARE FOR "/books" 
        app.use('/books', booksRoute);
        ```

- ### Adding Middleware For Handeling CORS Policy -

    > CORS (Cross-Origin Resource Sharing) is a security feature implemented by web browsers that restricts web pages from making requests to a different domain than the one that served the web page. It helps prevent potential security vulnerabilities by enforcing a same-origin policy.

    - Add CORS package to your backend -

        ```
        npm i cors
        ```

    - Import CORS in index.js -

        ```js
        import cors from 'cors';
        ```

    > ⦿ OPTION - 1: Allow all origins with default of CORS(*)

    ```js
    app.use(cors());
    ```

    > ⦿ OPTION - 2: Allow custom origins - (MORE CONVENIENT ✅)

    ```js
    app.use(
        cors({
            origin: 'http://localhost:5173',
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
            allowedHeaders: ['Content-Type'],
        })
    );
    ```

- ### BACKEND COMPLETED 👍🏻 ✅ 🚀


