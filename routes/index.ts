import route, { Router } from "express";
import userRoutes from './users.route';

const routes: Router = Router();

routes.use("/", userRoutes);

export default routes;