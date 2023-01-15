import { Router } from "express";
import { BookingRouter } from "./bookingRouter.mjs";
import { UserRouter } from "./userRouter.mjs"

const router = Router();

router.use('/users', UserRouter);
router.use('/bookings', BookingRouter);

export {
    router as ApiRouter
}