import {Router} from "express";
import {getAllBookings, getSingleBooking, createBooking, deleteBooking} from "../controllers/bookingController.mjs";

import { authenticateToken } from "../middleware/loginRequired.mjs";

const router = Router();

router.route('/')

    .get(getAllBookings)
    .post(authenticateToken, createBooking);

router.route(authenticateToken, '/:id')
    .get(getSingleBooking)
    .delete(deleteBooking);

export {
    router as BookingRouter,
}