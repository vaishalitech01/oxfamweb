import Apk from "../models/Apk.js";

export const getApk = async (req, res) => {
  try {
    const apk = await Apk.find().sort({ createdAt: -1 }).limit(1);
    res.json(apk[0]);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

export const addApk = async (req, res) => {
  try {
    const { link, version } = req.body;
    const newApk = new Apk({ link, version });
    await newApk.save();
    res.json(newApk);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

export const deleteApk = async (req, res) => {
  try {
    await Apk.findByIdAndDelete(req.params.id);
    res.json({ msg: "APK deleted" });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};
