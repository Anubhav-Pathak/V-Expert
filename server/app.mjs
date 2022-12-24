import express from "express";
import {BookingRouter} from "./routes/bookingRouter.mjs";

const app = express();
app.use(express.json());

app.use('/v1/bookings', BookingRouter);

export {
    app
}