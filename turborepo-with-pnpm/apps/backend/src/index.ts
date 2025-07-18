import express from "express";
import { status } from "@repo/common/config";

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: status,
  });
});

app.listen(3002);
