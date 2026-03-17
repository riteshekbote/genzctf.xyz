const express = require("express");
const axios = require("axios");
const cors = require("cors");
const { JSDOM } = require("jsdom");
const { Readability } = require("@mozilla/readability");
const gTTS = require("gtts");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Home route
app.get("/", (req, res) => {
res.send("API is running");
});

// Extract route
app.post("/extract", async (req, res) => {
try {
const { url } = req.body;

```
const response = await axios.get(url, {
  headers: { "User-Agent": "Mozilla/5.0" }
});

const dom = new JSDOM(response.data);
const reader = new Readability(dom.window.document);
const article = reader.parse();

if (!article || !article.textContent) {
  return res.status(400).json({ error: "Failed to extract content" });
}

const cleanText = article.textContent
  .replace(/\s+/g, " ")
  .trim()
  .slice(0, 3000);

res.json({
  title: article.title,
  content: cleanText
});
```

} catch (err) {
res.status(500).json({ error: "Extraction failed" });
}
});

// AUDIO ROUTE (STREAMING - BEST)
app.post("/audio", async (req, res) => {
try {
const { text } = req.body;

```
if (!text || text.length < 10) {
  return res.status(400).json({ error: "Invalid text" });
}

const gtts = new gTTS(text, "en");

res.set({
  "Content-Type": "audio/mpeg",
  "Content-Disposition": "inline; filename=audio.mp3"
});

gtts.stream().pipe(res);
```

} catch (err) {
console.error(err);
res.status(500).json({ error: "TTS failed" });
}
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});
