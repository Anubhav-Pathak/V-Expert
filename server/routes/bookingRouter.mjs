import {Router} from "express";
import {getAllBookings, getSingleBooking, createBooking, deleteBooking, updateBooking} from "../controllers/bookingController.mjs";

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