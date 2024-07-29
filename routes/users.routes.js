import { Router } from "express";
import { userController } from "../controllers/users.controllers.js";
const route = Router();

route.get("/", userController);

export default route;
