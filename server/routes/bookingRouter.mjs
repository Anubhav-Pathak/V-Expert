import {Router} from "express";
import {getAllBookings, getSingleBooking, createBooking, deleteBooking, updateBooking} from "../controllers/bookingController.mjs";

import { authenticateToken } from "../middleware/loginRequired.mjs";

const router = Router();

router.route('/')

    .get(getAllBookings)
    .post(createBooking);

router.route('/:id')
    .get(getSingleBooking)
    .patch(updateBooking)
    .delete(deleteBooking);

export {
    router as BookingRouter,
}