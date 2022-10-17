
import { Router } from "express"
import createUserController from "../modules/accounts/useCases/createUser";

// const createUserController = new createUserController();

const usersRoutes = Router();


usersRoutes.post("/", createUserController.handle);
export default usersRoutes;
