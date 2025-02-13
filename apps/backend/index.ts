import express from "express";
import { TrainModel, GenerateImage, GenerateImageFromPack } from "common/types";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.post("/ai/training", (req, res) => {});

app.post("/ai/generate", (req, res) => {});

app.post("/pack/generate", (req, res) => {});

app.post("/pack/bulk", (req, res) => {});

app.get("/image", (req, res) => {});
