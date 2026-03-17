const express = require("express");
const axios = require("axios");
const cors = require("cors");
const { JSDOM } = require("jsdom");
const { Readability } = require("@mozilla/readability");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health check route
app.get("/", (req, res) => {
res.send("API is running");
});

// URL validation (basic SSRF protection)
function isValidUrl(url) {
try {
const parsed = new URL(url);

```
// block internal/local requests
if (
  parsed.hostname.includes("localhost") ||
  parsed.hostname.includes("127.0.0.1") ||
  parsed.hostname.startsWith("192.168") ||
  parsed.hostname.startsWith("10.")
) {
  return false;
}

return true;
```

} catch {
return false;
}
}

// Extract route
app.post("/extract", async (req, res) => {
try {
const { url } = req.body;

```
if (!url || !isValidUrl(url)) {
  return res.status(400).json({ error: "Invalid URL" });
}

// Fetch page
const response = await axios.get(url, {
  headers: {
    "User-Agent": "Mozilla/5.0"
  },
  timeout: 10000
});

const dom = new JSDOM(response.data);

// Extract readable content
const reader = new Readability(dom.window.document);
const article = reader.parse();

if (!article || !article.textContent) {
  return res.status(400).json({ error: "Failed to extract content" });
}

// Clean text
const cleanText = article.textContent
  .replace(/\s+/g, " ")
  .trim()
  .slice(0, 5000);

res.json({
  title: article.title,
  content: cleanText
});
```

} catch (err) {
console.error(err.message);
res.status(500).json({ error: "Server error" });
}
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});

