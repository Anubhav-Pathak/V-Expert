import express from "express";
import path from "path";
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 8000;
const app = express();

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

app.listen(PORT,()=>{console.log(`Server started on port ${PORT}`)});