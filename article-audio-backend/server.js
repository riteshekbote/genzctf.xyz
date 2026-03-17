const gTTS = require("gtts");
const fs = require("fs");
const path = require("path");

app.post("/audio", async (req, res) => {
  try {
    const { text } = req.body;

    if (!text || text.length < 10) {
      return res.status(400).json({ error: "Invalid text" });
    }

    const filePath = path.join(__dirname, "audio.mp3");

    const gtts = new gTTS(text, "en");
    gtts.save(filePath, function (err) {
      if (err) {
        return res.status(500).json({ error: "TTS failed" });
      }

      res.sendFile(filePath);
    });

  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});
