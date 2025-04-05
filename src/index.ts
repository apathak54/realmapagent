import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { EntityModel } from "./models/Entity";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/realestate", {
   
  })
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.error("MongoDB connection error:", error));


app.post("/api/entity", async (req, res) => {
  try {
    const newRecord = new EntityModel(req.body);
    const savedRecord = await newRecord.save();
    res.status(201).json({ success: true, data: savedRecord });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
});



app.get("/api/entitya", async (req, res) => {
  try {
    const records = await EntityAModel.find();
    res.status(200).json({ success: true, data: records });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
});
app.get("/",async (req  , res ) => {
  
    res.status(200).json({ 
        message : "Hello World"
    })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
