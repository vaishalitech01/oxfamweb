import mongoose from "mongoose";

const apkSchema = new mongoose.Schema({
  link: { type: String, required: true },
  version: { type: String, default: "1.0" },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Apk", apkSchema);
