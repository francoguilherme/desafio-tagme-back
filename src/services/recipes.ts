import { Service, Inject, Container } from "typedi";
import RecipeBusiness from "../business/recipes";

@Service()
export default class RecipeService {
    private _controller: RecipeBusiness;

    constructor() {
        this._controller = new RecipeBusiness();
    }

    public async GetAllRecipes(): Promise<any> {
        try {
            let controller = this._controller;
            let recipes = await controller.findAll();
            return recipes;
        } catch (e) {
            throw e;
        }
    }

    public async GetRecipeById(recipeId: string): Promise<any> {
        try {
            let controller = this._controller;
            let recipe = await controller.findById(recipeId);
            return recipe;
        } catch (e) {
            throw e;
        }
    }
}
