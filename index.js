const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();


app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.send('✅ Backend is working!');
});

const connectDB = async () => {
  try {
    
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("❌ DB Connection Error:", err);
  }
};


const PORT = 5000;
app.listen(PORT, () => {
  connectDB();
  console.log(`🚀 Server started on port ${PORT}`);
});