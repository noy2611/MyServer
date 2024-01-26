const http = require("http");
const { router } = require("./router");

const winston = require("winston");
const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "my-http-service" },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "combined.log" }),
  ],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );
}

const server = http.createServer((req, res) => {
  logger.info(req.method);
  if (req.method === "POST" || req.method === "PUT") {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
    });
    req.on("end", () => {
      try {
        req.body = JSON.parse(data);
        router(req, res);
      } catch (error) {
        console.error("Error parsing JSON", error.message);
        res.statusCode = 400;
        res.end("invalid JSON");
      }
    });
  } else {
    router(req, res);
  }
});

const port = 8080;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
