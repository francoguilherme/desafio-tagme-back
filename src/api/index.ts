import { Router } from 'express';
import recipes from './routes/recipes';

export default () => {
    const app = Router();
    recipes(app);
    return app
}
