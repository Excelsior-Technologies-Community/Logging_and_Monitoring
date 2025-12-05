import morgan from "morgan";
import winston from "winston";
import fs from "fs";
import path from "path";

// Winston Logger
const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: "logs/error.log", level: "error" }),
    new winston.transports.File({ filename: "logs/combined.log" }),
  ],
});

if (process.env.NODE_ENV !== "production") {
  logger.add(new winston.transports.Console({ format: winston.format.simple() }));
}


const morganMiddleware = morgan("combined", {
  stream: {
    write: (message) => logger.info(message.trim()),
  },
});

export { logger, morganMiddleware };
