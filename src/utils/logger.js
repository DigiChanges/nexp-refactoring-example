import winston from 'winston';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.simple(),
    winston.format.colorize()
  )
});

if (process.env.NODE_ENV !== 'production')
{
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

export default logger;
