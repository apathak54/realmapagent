import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import entityRoutes from './routes/entityRoutes';
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


app.use('/api/entity', entityRoutes);

app.get("/",async (req  , res ) => {
  
    res.status(200).json({ 
        message : "Hello World"
    })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
