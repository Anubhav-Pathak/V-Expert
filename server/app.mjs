import express from "express";

import {BookingRouter} from "./routes/bookingRouter.mjs";
import { UserRouter } from "./routes/userRouter.mjs";

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.use('/users', UserRouter);
app.use('/bookings', BookingRouter);

export {
    app
}