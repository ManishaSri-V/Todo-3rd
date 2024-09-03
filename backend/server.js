const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const port = 5000;

app.use(express.json()); // middileware

app.use(cors());

const mongo_url =
  "mongodb+srv://rasurimanishasri:S1ryf8HP89FVLfcy@cluster0.zv8dxjs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(mongo_url, {});
mongoose.connection.on("connected", () => {
  console.log("Connected to Mongodb database successfully");
});

const route = require("./route/taskRoute");
const { required } = require("joi");

app.use("/api/task", route);

app.listen(port, () => {
  console.log("Server started on port" + " " + port);
});
