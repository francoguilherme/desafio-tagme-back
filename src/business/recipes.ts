import { Container } from 'typedi';
import request from 'request-promise';
import { RecipeRepository } from "../repo/RecipeRepository";
import { IRecipe } from "../interfaces/IRecipe";

export default class Client implements Client {
    private _recipeRepository: RecipeRepository

    constructor() {
        this._recipeRepository = new RecipeRepository();
    }

    async findAll(): Promise<IRecipe[]> {
        return await this._recipeRepository.findAll();
    }

    async findById(recipeId: string): Promise<IRecipe> {
        return await this._recipeRepository.findById(recipeId)
    }
}
