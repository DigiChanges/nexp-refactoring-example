require('dotenv').config();

const compression = require("compression");
const express = require("express");
const helmet = require("helmet");
const mongoose = require('mongoose');
const cors = require('cors');
const {ItemRouter} = require("./routes/ItemRoute");
const {errorHandler} = require("./middlewares/errorHandler");
const {logger} = require("./middlewares/logger");

void (async() =>
{
    try
    {
        await mongoose.connect(`${process.env.DB_URL}`, { useNewUrlParser: true });
        const app = express();

        app.use(compression());
        app.use(helmet());
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));
        app.use(cors());

        app.use(logger);
        app.use('/api/items', ItemRouter);
        app.use(errorHandler);

        app.listen(8085, () => {
           console.log('Server listening on 8085');
        })
    }
    catch (error)
    {
        console.log('Error while connecting to the database', error);
        throw error;
    }
})();
