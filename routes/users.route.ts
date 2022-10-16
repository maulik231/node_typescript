import { Router } from "express";
import usersController from '../controller/users.controller';

const route: Router = Router();

route.get('/get_users', usersController.getUsers);
route.post('/create_user', usersController.create);

export default route;