if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = process.env.PORT;

const router = require("./routes/routes");
const errorHandler = require("./middlewares/errorHandler");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);
app.use(errorHandler);

const start = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.MONGO_CRED}@financetrackdb.i9a3n6r.mongodb.net/?retryWrites=true&w=majority`);
    app.listen(port, () => console.log("Server started on port", port));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
