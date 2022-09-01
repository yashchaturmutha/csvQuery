import winston,{format,transports} from 'winston';

const logConfiguration = {
    // 'transports': [
    //     new winston.transports.Console()
    // ]
    'transports': [
        new winston.transports.File({
            filename: 'logs/example.log',
            options: { flags: 'w' },
            // format:format.combine(
            //     format.timestamp({format: 'MMM-DD-YYYY HH:mm:ss'}),
            //     format.align(),
            //     format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`),
            // )
        }),

        new winston.transports.File({
            level: 'error',
            filename: 'logs/errors.log',
            options: { flags: 'w' },
            // format:format.combine(
            //     format.timestamp({format: 'MMM-DD-YYYY HH:mm:ss'}),
            //     format.align(),
            //     format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.meta.target}`),
            // )
        })
    ]
};

const logger = winston.createLogger(logConfiguration);

// Log a message
// logger.log({
//     // Message to be logged
//         message: 'Hello, Winston!',

//     // Level of the message logging
//         level: 'info'
//     });
    // Log a message

export default logger;