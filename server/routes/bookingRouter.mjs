import {Router} from "express";
import {getAllBookings, getSingleBooking, createBooking, deleteBooking, updateBooking} from "../controllers/bookingController.mjs";

import { authenticateToken } from "../middleware/loginRequired.mjs";

const router = Router();

router.route('/')

    .get(authenticateToken, getAllBookings)
    .post(createBooking);

router.route('/:id')
    .get(authenticateToken, getSingleBooking)
    .patch(authenticateToken, updateBooking)
    .delete(authenticateToken, deleteBooking);

export {
    router as BookingRouter,
}