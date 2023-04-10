import dotenv from 'dotenv';
dotenv.config();

import compression from 'compression';
import express from 'express';
import helmet from 'helmet';
import mongoose from 'mongoose';
import cors from 'cors';
import ItemRouter from './routes/ItemRoute.js';
import errorHandler from './middlewares/errorHandler.js';
import logger from './middlewares/logger.js';

void (async() =>
{
    try
    {
        await mongoose.connect(`${process.env.DB_URL}`);
        const app = express();

        app.use(compression());
        app.use(helmet());
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));
        app.use(cors());

        app.use(logger);
        app.use('/api/items', ItemRouter);
        app.use(errorHandler);

        app.listen(8085, () =>
        {
           console.log('Server listening on 8085');
        });
    }
    catch (error)
    {
        console.log('Error while connecting to the database', error);
        throw error;
    }
})();
