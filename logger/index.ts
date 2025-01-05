import { createLogger, format, transports } from 'winston';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const logsDir = 'logs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const logFormat = format.printf(({ level, message, timestamp, stack }) => {
	return `${timestamp} [${level.toUpperCase()}]: ${stack || message}`;
});

const logger = createLogger({
	format: format.combine(
		format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
		format.errors({ stack: true }),
		logFormat
	),
	transports: [
		new transports.File({
			filename: join(__dirname, logsDir, 'error.log'),
			level: 'error',
		}),

		new transports.File({
			filename: join(__dirname, logsDir, 'access.log'),
			level: 'debug',
			handleExceptions: true,
			format: format.combine(
				format((info) => {
					return info.level === 'error' ? false : info;
				})(),
				logFormat
			),
		}),

		new transports.Console({
			format: format.combine(format.colorize(), logFormat),
			level: 'debug',
		}),
	],
	exitOnError: false,
});

export default logger;
