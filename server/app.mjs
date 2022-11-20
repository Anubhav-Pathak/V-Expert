import express from "express";
import bodyParser from "body-parser";
import path from "path";
import clientRoute from "./routes/client.mjs";
const app = express();
app.set("view engine", "ejs");
app.set("views", "server/views");
app.use(bodyParser.urlencoded({extended: false})); 
app.use(express.static(path.join(path.resolve(),"server/public")));
app.use("/",clientRoute);
app.listen(3000);