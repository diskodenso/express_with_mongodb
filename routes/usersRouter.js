// import Router 
import { Router } from 'express';
import { createNewUser, getAllUsers } from '../controllers/usersController.js';
// call router function
const usersRouter = Router();
// create different routes on "main entries route"
usersRouter.route("/").get(getAllUsers).post(createNewUser);
// create different routes on "single entries route"
usersRouter.route("/:id").get(getSingleUser).delete(deleteOneUser).put(updateOneUser);
// export usersRouter to make it available
export default usersRouter;