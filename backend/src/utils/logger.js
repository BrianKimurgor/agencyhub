import winston from 'winston';

const { combine, timestamp, printf } = winston.format;


/**
 * Custom log format function to format log messages.
 * @param {Object} info - Log information object containing level, message, and timestamp.
 * @returns {string} Formatted log message with timestamp, log level, and message.
 */
const logFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

export const logger = winston.createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    logFormat
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
  ],
});

export default logger;
