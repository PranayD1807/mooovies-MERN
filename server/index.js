import express from "express";
import cookieParser from "cookie-parser";

import cors from "cors";
import http from "http";
import mongoose from "mongoose";
import "dotenv/config";
import routes from "./src/routes/index.js";
const app = express();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
    optionSuccessStatus: 200,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/api/v1", routes);

const port = process.env.PORT || 5000;
const server = http.createServer(app);
mongoose
  .set("strictQuery", false)
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("🔥 M-DB Connected 🔥");
    server.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log({ err });
    process.exit(1);
  });
