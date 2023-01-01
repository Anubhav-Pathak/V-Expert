import {Router} from "express";

import {createUser, signInUser} from "../controllers/userController.mjs";
import {authenticateToken} from "../middleware/loginRequired.mjs";

const router = Router();

router.route('/sign-up')
    .post(authenticateToken, createUser);

router.route('/sign-in')
    .post(signInUser)

export {
    router as UserRouter,
}