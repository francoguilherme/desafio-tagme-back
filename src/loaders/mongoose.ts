import mongoose, {Mongoose} from 'mongoose';
import config from '../config';

export default async (): Promise<Mongoose> => {
    return mongoose.connect(config.databaseURL, {
        ssl: true,
        replicaSet: "atlas-9xx5m3-shard-0",
        authSource: "admin"
    });
};
