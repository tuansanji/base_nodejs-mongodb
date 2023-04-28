const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

const app = express();

const port = 9000;

dotenv.config();

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MONGODB TO CONNECTED");
  })
  .catch((err) => {
    console.error(`connection error: ${err}`);
  });

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3001"],
    methods: "GET,PUT,POST,DELETE,PATCH",

    credentials: true,
  })
);

// server.listen(port, () => console.log(`Server started on port ${port}`));

app.listen(port, () => console.log(`App listening on port ${port}`));
