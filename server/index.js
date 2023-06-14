const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to our API network!"
    });
});

app.listen(3000, '0.0.0.0', () => {
    console.log("Server started at port 3000.")
});
