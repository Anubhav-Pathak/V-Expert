import {Router} from "express";
import {getAllBookings, getSingleBooking, createBooking, deleteBooking} from "../controllers/bookingController.mjs";

const router = Router();

router.route('/')
    .get(getAllBookings)
    .post(createBooking);

router.route('/:id')
    .get(getSingleBooking)
    .delete(deleteBooking);

export {
    router as BookingRouter,
}