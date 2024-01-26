const winston = require("winston");

const successLog = winston.createLogger({
  transports: [
    new winston.transports.File({ filename: 'success.log' }),  
  ],
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
});

const errorLog = winston.createLogger({
  transports: [
    new winston.transports.File({ filename: 'error.log' }),  
  ],
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
});

module.exports = {
  successLog,
  errorLog,
};
