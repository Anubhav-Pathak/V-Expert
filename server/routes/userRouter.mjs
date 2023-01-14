import {Router} from "express";

import {createUser, signInUser} from "../controllers/userController.mjs";

const router = Router();

router.route('/sign-up')
    .post(createUser);

router.route('/sign-in')
    .post(signInUser)

export {
    router as UserRouter,
}