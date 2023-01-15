import mongoose from "mongoose";
import * as dotEnv from "dotenv";

import logger from "./utils/logger.mjs";
import {app} from "./app.mjs";

dotEnv.config({path: './.env'});

const port = process.env.PORT || 8000;

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
}).then(() => {
    logger.info('Connected to DB');
    app.listen(port, () => {
        logger.info(`Server is running on port ${port}`);
    })
}).catch((e) => {
    logger.error(`Unable to connect to DB ${e}`);
});


