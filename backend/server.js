const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");
const dbConfig = require("./config/db.config.js");

const app = express();

const PORT = 5000;

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

require("./routes/employee.routes")(app);

//database connection
mongoose.Promise = global.Promise;
mongoose
  .connect(dbConfig.mongoUrlLocal, {
    user: "admin",
    pass: "password",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

// 404 page
app.use((req, res) => {
  res.status(404).send({
    message: err.message || "The page you requested is not available.",
  });
});

module.exports = app; // for testing
