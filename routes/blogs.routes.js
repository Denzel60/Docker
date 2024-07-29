import { Router } from "express";
import { blogsController } from "../controllers/blogs.controllers.js";
const route = Router();

route.get("/", blogsController);

export default route;
