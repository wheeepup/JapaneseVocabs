const express = require("express");
const bodyParser = require("body-parser");
const TelegramBot = require("node-telegram-bot-api");

const app = express();
app.use(bodyParser.json());

// Load bot with token from environment
const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });

// Endpoint for Netlify frontend to send messages
app.post("/send", (req, res) => {
  const msg = req.body.message;
  bot.sendMessage(process.env.TELEGRAM_CHAT_ID, msg);
  res.json({ status: "sent" });
});

// Log incoming Telegram messages
bot.on("message", (telegramMsg) => {
  console.log("Telegram reply:", telegramMsg.text);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Backend running on ${PORT}`));
