import {Router} from "express";
import {authenticateToken} from "../middleware/loginRequired.mjs"
import {createUser, signInUser} from "../controllers/userController.mjs";

const router = Router();

router.route('/sign-up')
    .post(authenticateToken, createUser);

router.route('/sign-in')
    .post(signInUser)

export {
    router as UserRouter,
}