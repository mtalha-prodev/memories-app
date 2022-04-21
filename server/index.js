import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/posts.js";

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// default route
app.use("/", router);
// connect database
const connection_URL = "mongodb://localhost:27017/Memories";

mongoose
  .connect(connection_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(process.env.PORT, () => {
      console.log(`Server is Running ${process.env.PORT}`);
    })
  )
  .catch((error) => console.log(error.message));
