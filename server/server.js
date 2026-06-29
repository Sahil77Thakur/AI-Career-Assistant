const express = require("express");
const cors = require("cors");
require("dotenv").config({
  path: __dirname + "/.env",
});
console.log("__dirname =", __dirname);
console.log("cwd =", process.cwd());
console.log("API KEY:", process.env.GEMINI_API_KEY ? "Loaded ✅" : "Missing ❌");

const analyzeRoute = require("./routes/analyze");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/analyze", analyzeRoute);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Resume Assistant Backend Running 🚀",
  });
});

const PORT = 5000;

//test api //
app.get("/test-gemini", async (req, res) => {
  try {
    const analyzeResume = require("./gemini");

    const result = await analyzeResume(
      "John Doe\nSkills: React, JavaScript\nExperience: 2 years",
      "Frontend Developer"
    );

    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

console.log(process.env.GEMINI_API_KEY ? "API Key Loaded ✅" : "API Key Missing ❌");



app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});