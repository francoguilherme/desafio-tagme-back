import { IRecipe } from "../interfaces/IRecipe";
import mongoose, { Schema, Document, Model } from "mongoose";
import config from "../config";
import recipe from "../schemas/recipe"

const DataSchema = new Schema(
    recipe,
    {
        toJSON: {
            transform: (_, ret) => {
                delete ret.__v;
            },
        },
        collection: "recipes",
        usePushEach: true,
        timestamps: true
    }
);

var connection = mongoose.createConnection(config.databaseURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
});

export default connection.model<IRecipe>(
    "Recipe",
    DataSchema,
    "recipes"
);
