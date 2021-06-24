import { Router } from "express";
import CreateUserController from "./controllers/User/CreateUserController";
import { CreateTagController } from "./controllers/Tags/CreateTagController";
import {AuthenticateUserController} from "./controllers/Auth/AuthenticateUserController"
import { ensureAdmin } from "./middlewares/ensureAdmin";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController()

router.post("/users", createUserController.handle);
router.post("/tags", ensureAdmin, createTagController.handle);
router.post("/login", authenticateUserController.handle)

export { router };
