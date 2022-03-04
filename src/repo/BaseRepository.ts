import { IWrite } from '../interfaces/IWrite';
import { IRead } from '../interfaces/IRead';

import mongoose from "mongoose";

export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {
    public _model: mongoose.Model<mongoose.Document>;

    constructor(schemaModel: mongoose.Model<any>) {
        this._model = schemaModel;
    }

    async create(item: T): Promise <any> {
        return await this._model.create(item);
    }

    async find(item: any):Promise<T[]> {
        const result: any = await this._model.find(item)
        return result
    }

    async update(_id: mongoose.Types.ObjectId, item: T): Promise <any> {
        return await this._model.findOneAndUpdate({ _id: _id }, item, {new:true});
    }

    async delete(_id: string) {
        return await this._model.remove({ _id: this.toObjectId(_id) });
    }

    async findOne(item: T, options?): Promise<T> {
        const result: any = await this._model.findOne(item, options);
        return result
    }

    async findById(_id: string): Promise<T> {
        const result:any  = await this._model.findById(_id);
        return result
    }

    private toObjectId(_id: string): mongoose.Types.ObjectId {
        return mongoose.Types.ObjectId.createFromHexString(_id)
    }
}
