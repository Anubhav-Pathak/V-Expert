import * as dotenv from 'dotenv';
dotenv.config()

import express from "express";
import path from "path";
import mongoose from "mongoose";
import {fileURLToPath} from 'url';

import Package from "./models/package.mjs";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 8000;
const app = express();
app.use(express.json())

const DATABASE_URL = process.env.DATABASE_URL
mongoose.connect(DATABASE_URL);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {});

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", function(_, res) {
    res.sendFile(
        path.join(__dirname, "../client/build", "index.html"),
        function (err) {
            if(err) {
                res.status(500).send(err)
            }
        }
    )
})


app.post("/api/package", async (req, res) => {
    const data = req.body;
    const pack = await Package.create(data);
    try {
      res.send(pack.id);
    } catch (error) {
      res.status(500).send("Error");
    }
});

app.listen(PORT,()=>{console.log(`Server started on port ${PORT}`)});