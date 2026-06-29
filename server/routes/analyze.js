const express = require("express");
const multer = require("multer");

const extractText = require("../utils/pdfParser");
const analyzeResume = require("../gemini");

const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
});

router.post("/", upload.single("resume"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No resume uploaded.",
      });
    }

    const text = await extractText(req.file.buffer);

 const rawResponse = await analyzeResume(
  text,
  req.body.workField || "General",
  req.body.analysisType || "General",
  req.body.company || "",
  req.body.jobRole || ""
);
    let parsed;

    try {
      parsed = JSON.parse(rawResponse);
    } catch {
      return res.status(500).json({
        success: false,
        message: "Gemini returned invalid JSON.",
        raw: rawResponse,
      });
    }

    return res.json({
      success: true,
      filename: req.file.originalname,
      ...parsed,
    });
  } catch (error) {
    console.error("Analyze Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message || "Resume analysis failed.",
    });
  }
});

module.exports = router;