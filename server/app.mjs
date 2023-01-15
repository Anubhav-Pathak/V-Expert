import express from "express";
import cors from "cors";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { ApiRouter } from "./routes/api.mjs";
import * as path from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", async function(_, res) {
  res.sendFile(
    path.join(__dirname, "../client/build", "index.html"),
      function (err) {
        if(err) {
          res.status(500).send(err)
        }
    })
})

export {
    app
}