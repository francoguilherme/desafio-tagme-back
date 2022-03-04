import dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (!envFound) {
    throw new Error("Couldn't find .env file");
}

export default {
    port: parseInt(process.env.PORT || '80', 10),
    mode: process.env.MODE || "dev",
    databaseURL: process.env.MONGODB_URI,
    logs: {
        level: process.env.LOG_LEVEL || 'silly',
    },
    api: {
        prefix: '/',
    }
};
