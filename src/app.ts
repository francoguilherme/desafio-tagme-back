import express from 'express';
import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import 'reflect-metadata'; // We need this in order to use @Decorators
import cors from 'cors';
import config from './config';

const app: express.Application = express();

async function startServer() {
    app.use(express.json());
    app.use(cors());

    const loggerOptions: expressWinston.LoggerOptions = {
        transports: [new winston.transports.Console()],
        format: winston.format.combine(
            winston.format.json(),
            winston.format.prettyPrint(),
            winston.format.colorize({ all: true })
        ),
    };

    app.use(expressWinston.logger(loggerOptions));

    const runningMessage = `Server listening on port: ${config.port}`;
    app.get('/', (req: express.Request, res: express.Response) => {
        res.status(200).send(runningMessage)
    });

    await require('./loaders').default({ expressApp: app });

    app.listen(config.port, () => {
        console.log(runningMessage);
    });
}

startServer();
