import express, { json } from "express";
import cors from "cors";
import mongoose from "mongoose";

import { routes } from "./routes/index.mjs";

const app = express();

app.use(json());
app.use(cors());

await mongoose
  .connect("mongodb://admin:admin@localhost:2384/danilo")
  .then(() => console.log("✨ Database started successfully"))
  .catch(() => console.log("❌ Database not started successfully!"));

app.use("/", routes);

app.listen(3100, () => console.log("🚀 Server started successfully!"));
