import express from "express";
import path from "path";
import {fileURLToPath} from 'url';

import {BookingRouter} from "./routes/bookingRouter.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "../client/build")));

// app.get("*", function(_, res) {
//     res.sendFile(
//         path.join(__dirname, "../client/build", "index.html"),
//         function (err) {
//             if(err) {
//                 res.status(500).send(err)
//             }
//         }
//     )
// })

app.use('/bookings', BookingRouter);

export {
    app
}