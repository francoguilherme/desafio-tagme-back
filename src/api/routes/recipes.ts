import { Router, Request, Response, NextFunction } from "express";
import { Container } from "typedi";
import RecipeService from "../../services/recipes";

const route = Router();

export default (app: Router) => {
    app.use("/recipe", route);

    route.get("/status", (req, res) => {
        res.status(200).end();
    });
    route.head("/status", (req, res) => {
        res.status(400).end();
    });

    route.get("/", async (req: Request, res: Response, next: NextFunction) => {
        try {
            const RecipeServiceInstance = Container.get(RecipeService)
            const response = await RecipeServiceInstance.GetAllRecipes()
            res.status(200).json(response);
        } catch (e) {
            console.log("🔥 Endpoint error: %o", e);
            return next(e);
        }
    });

    route.get("/:recipeId", async (req: Request, res: Response, next: NextFunction) => {
        const recipeId = req.params.recipeId;
        try {
            const RecipeServiceInstance = Container.get(RecipeService)
            const response = await RecipeServiceInstance.GetRecipeById(recipeId)
            res.status(200).json(response);
        } catch (e) {
            console.log("🔥 Endpoint error: %o", e);
            return next(e);
        }
    });
}
