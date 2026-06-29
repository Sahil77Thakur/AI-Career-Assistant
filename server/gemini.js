const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const MODELS = [
  "gemini-2.5-flash",
  "gemini-2.5-flash-lite",
  "gemini-2.0-flash",
];

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function analyzeResume(
  resumeText,
  workField,
  analysisType,
  company,
  jobRole
) {
  const prompt = `
You are an expert ATS Resume Analyzer and Senior Recruiter.

Analyze the following resume.

Work Field:
${workField || "General"}

Analysis Type:
${analysisType || "General"}

Company:
${company || "Not Specified"}

Job Role:
${jobRole || "General"}

Resume:
${resumeText}

Rules:

- Think like both an ATS and an experienced recruiter.
- Score between 0 and 100.
- Explain deductions.
- Provide realistic strengths.
- Provide realistic weaknesses.
- Suggest missing skills.
- Generate interview questions.
- Generate a learning roadmap.
- Return ONLY valid JSON.

Return EXACTLY:

{
  "ats_score":0,
  "overall_rating":"",
  "resume_summary":"",
  "strengths":[],
  "weaknesses":[],
  "missing_skills":[],
  "overall_feedback":"",
  "interview_questions":[],
  "learning_roadmap":[]
}
`;

  const MAX_RETRIES = 5;

  for (const model of MODELS) {
    console.log(`\nTrying Model: ${model}`);

    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
      try {
        console.log(`Attempt ${attempt}/${MAX_RETRIES}`);

        const response = await ai.models.generateContent({
          model,
          contents: prompt,
          config: {
            responseMimeType: "application/json",
            temperature: 0,
          },
        });

        console.log(`Success using ${model}`);

        return response.text;
      } catch (error) {
        const status =
          error.status ||
          error.code ||
          error?.error?.code;

        console.log(`Error (${status})`);

        if (
          status === 429 ||
          status === 500 ||
          status === 503
        ) {
          console.log("Gemini busy. Waiting 4 seconds...");

          await sleep(4000);

          continue;
        }

        throw error;
      }
    }

    console.log(`Switching model...\n`);
  }

  return JSON.stringify({
    ats_score: 0,
    overall_rating: "Unavailable",
    resume_summary: "",
    strengths: [],
    weaknesses: [],
    missing_skills: [],
    overall_feedback:
      "Google Gemini servers are currently busy. Please try again in a few minutes.",
    interview_questions: [],
    learning_roadmap: [],
  });
}

module.exports = analyzeResume;