import express from "express";
import cors from "cors";

import { ApiRouter } from "./routes/api.mjs";

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api', ApiRouter);

export {
    app
}