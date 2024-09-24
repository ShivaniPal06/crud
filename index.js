//import all packages

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const userRoutes = require('./routes/UserRoutes');

//initialize app
const app = express();
app.use(bodyParser.json());
app.use(cors());

//configure dotenv
dotenv.config();

app.use('/user', userRoutes);

//to process .env file
const PORT = process.env.PORT || 7000;
const URL = process.env.MONGO_URL;

app.get("/", (req, res) =>{
    res.send("Hello from server!");
});
//connect to database
mongoose.connect(URL).then(() => {
    console.log("Database connected successfully! ");
    
}).catch((err) => {
    console.log(err);
});

app.listen(PORT, () => {
    console.log(`Server is running successfully on port ${PORT}`);
})