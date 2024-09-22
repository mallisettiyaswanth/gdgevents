const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const eventRoutes = require("./routes/events");
const mongoose = require("mongoose");

dotenv.config({
  path: ".env",
});

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/events", eventRoutes);

app.listen(process.env.PORT, () => {
  mongoose
    .connect(
      process.env.MONGOURL.replace("<db_password>", process.env.MONGOPASSWORD)
    )
    .then(() => {
      console.log("db is connected");
    });

  console.log(`Server is running on port ${process.env.PORT}`);
});
