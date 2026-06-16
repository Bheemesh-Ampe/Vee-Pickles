const orderRoutes = require("./routes/orderRoutes");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
require("dotenv").config();

console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "Loaded" : "Missing");

const app = express();

console.log("Mongo URI Loaded:", process.env.MONGO_URI ? "YES" : "NO");

app.use(cors());
app.use(express.json());
 app.use("/api/orders", orderRoutes);
 app.use("/api/auth", authRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch((err) => {
    console.error("❌ MongoDB Error:", err);
  });
// Test Route
app.get("/", (req, res) => {
  res.send("Vee Pickles Backend Running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});