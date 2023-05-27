import compression from 'express-compression';
import express from 'express';
import helmet from 'helmet';
import mongoose from 'mongoose';
import cors from 'cors';

import ItemRouter from './routes/ItemRoute.js';
import errorHandler from './middlewares/errorHandler.js';
import loggerMiddleware from './middlewares/logger.js';
import logger from './utils/logger.js';

import envValidation from './utils/envalid.js';

void (async() =>
{
	try
  {
    envValidation();

		await mongoose.connect(`${process.env.DB_URL}`);
		const app = express();

		app.use(
			compression({
				brotli: { enable: true, zlib: {} }
			})
		);
		app.use(helmet());
		app.use(express.json());
		app.use(express.urlencoded({ extended: true }));
		app.use(cors());

		app.use(loggerMiddleware);
		app.use('/api/items', ItemRouter);
		app.use(errorHandler);

		app.listen(process.env.SERVER_PORT, () =>
    {
			logger.info(`Server listening on ${process.env.SERVER_PORT}`);
		});
	}
  catch (error)
  {
		logger.error('Error while connecting to the database', error);
		throw error;
	}
})();
