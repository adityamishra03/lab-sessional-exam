const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

handler = require("./routes");

mongoose
  .connect(
    "mongodb+srv://aditya:aditya:*****@cluster0.rhkcj.mongodb.net/<medical1>?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
  )
  .then(() => console.log("[INFO] Connected to database."))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());

app.use("/api/feedback", handler);

const PORT = 3000;

app.listen(PORT, console.log(`[INFO] Listening at ${PORT}`));
