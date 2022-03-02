import { BaseRepository } from "./BaseRepository";
import { IRecipe } from "../interfaces/IRecipe";
import RecipeSchema from "../models/recipe";
import { Document } from "mongoose";

export class RecipeRepository extends BaseRepository<IRecipe & Document> {
    constructor() {
        super(RecipeSchema)
    }

    async findAll():Promise<any> {
        return this._model.find().select({name: 1, description: 1, image: 1});
    }

    async findById(id: string):Promise<any> {
        return this._model.findById(id);
    }
}
