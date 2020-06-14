const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config({path: 'config.env'});

app.use('/', async (req, res, next) => {
    res.status('200').json({message: `Great ${process.env.DB_USERNAME}`});
});


// In case of error
app.use((error, req, res, next) => {
    return res.status('400').json(error.message);
});

app.listen('5000', () => console.log("Now the server is running"));

