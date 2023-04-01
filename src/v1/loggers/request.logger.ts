import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

export const requestLogger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ level, message, timestamp }) =>
      JSON.stringify({
        timestamp,
        level,
        request: message,
      })
    )
  ),
  transports: [
    new DailyRotateFile({
      dirname: "logs/request",
      filename: "request-%DATE%.log",
      datePattern: "YYYYMMDD",
      createSymlink: true,
      symlinkName: "request.log",
      zippedArchive: true,
      maxFiles: "14d",
    }),
  ],
});
