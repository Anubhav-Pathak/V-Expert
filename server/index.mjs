import mongoose from "mongoose";
import * as dotEnv from "dotenv";

import logger from "./utils/logger.mjs";
import {app} from "./app.mjs";

dotEnv.config({path: './.env'});

const port = process.env.PORT || 8000;

mongoose.set('strictQuery', false);

await mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    logger.info('Connected to DB');
}).catch((e) => {
    logger.error(`Unable to connect to DB ${e}`);
});

app.listen(port, () => {
    logger.info(`Server is running on port ${port}`);
})