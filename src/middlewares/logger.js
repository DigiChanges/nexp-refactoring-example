import loggerUtil from '../utils/logger.js';

const logger = (req, res, next) =>
{
	loggerUtil.info(`${req.method}: ${req.path} - ${req.ip}`);
	next();
};

export default logger;
