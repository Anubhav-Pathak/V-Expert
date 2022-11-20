import express from "express";
import path from "path";
const PORT = process.env.PORT || 3000;
const app = express();
app.listen(PORT,()=>{console.log(`Server started on port ${PORT}`)});