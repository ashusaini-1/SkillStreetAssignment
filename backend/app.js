const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

const cors = require("cors");

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const user = require("./routes/userRoutes");
const notes = require("./routes/notesRoutes");

app.use("/api", user);
app.use("/api/", notes);

module.exports = app;
