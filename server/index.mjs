import logger from "./utils/logger.mjs";
import {app} from "./app.mjs";
import mongoose from "mongoose";
import * as dotEnv from "dotenv";

dotEnv.config({path: './config.env'});

mongoose.connect(`${process.env.MONGO_URL}`)
    .then(() => logger.info(`DB connected Successfully`))
    .catch(err => logger.error(`Enable to connect to DB \n\nErr:\n\n${err}`));

const port = process.env.PORT || 5000;

app.listen(port, () => {
    logger.info(`Server Connected on Port: ${port}`);
})
