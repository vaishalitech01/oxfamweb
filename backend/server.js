import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// ✅ Home Route (for checking server status)
app.get("/", (req, res) => {
  res.send("✅ Server is working fine!");
});

// Routes
import authRoutes from "./routes/authRoutes.js";
import apkRoutes from "./routes/apkRoutes.js";

app.use("/api/auth", authRoutes);
app.use("/api/apk", apkRoutes);

// DB Connection
mongoose.connect(process.env.MONGO_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
