import mongoose = require("mongoose");

export interface IRecipe extends mongoose.Document {
    _id: mongoose.Types.ObjectId;
    name: string;
    description: string;
    ingredients: string[];
    preparationTime: number;
    steps: string[];
}
