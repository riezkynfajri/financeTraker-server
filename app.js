if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = process.env.PORT;

const router = require("./routes/routes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://riezkyn:f1n4nc3Tr4ck1ng@financetrackdb.i9a3n6r.mongodb.net/?retryWrites=true&w=majority"
    );
    app.listen(port, () => console.log("Server started on port 3000"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
