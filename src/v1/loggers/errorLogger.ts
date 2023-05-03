import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

export const errorLogger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ level, message, timestamp }) =>
      JSON.stringify({
        timestamp,
        level,
        error: message,
      })
    )
  ),
  transports: [
    new DailyRotateFile({
      dirname: "logs/error",
      filename: "error-%DATE%.log",
      datePattern: "YYYYMMDD",
      createSymlink: true,
      symlinkName: "error.log",
      zippedArchive: true,
      maxFiles: "14d",
    }),
  ],
});

if (process.env.NODE_ENV !== "production") {
  errorLogger.add(new winston.transports.Console());
}
