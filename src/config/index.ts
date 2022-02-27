import dotenv from 'dotenv';

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (!envFound) {
    // This error should crash whole process
    throw new Error("Couldn't find .env file");
}

export default {
    /**
     * Your favorite port
     */
    port: parseInt(process.env.PORT || '80', 10),

    mode: process.env.MODE || "dev",

    /**
     * That long string from mlab
     */
    databaseURL: process.env.MONGODB_URI,

    /**
     * Used by winston logger
     */
    logs: {
        level: process.env.LOG_LEVEL || 'silly',
    },
    /**
     * API configs
     */
    api: {
        prefix: '/',
    }
};
