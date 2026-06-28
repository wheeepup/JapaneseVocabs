// server.js

import express from "express";
import http from "http";
import { Server } from "socket.io";
import TelegramBot from "node-telegram-bot-api";
import fetch from "node-fetch"; // needed to download files

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// 🔑 Bot token from BotFather
const TELEGRAM_TOKEN = "8914107820:AAFhd7Gw4yMDZdzsVehu1s7DSq87u20rEb8";

// 🔑 Your actual group chat ID (from logs)
const TELEGRAM_CHAT_ID = -1004385768325;

// ✅ Initialize bot (no polling)
const bot = new TelegramBot(TELEGRAM_TOKEN);

// ✅ Set webhook (replace with your Render domain)
bot.setWebHook(`https://telegram-chat-backen.onrender.com/${TELEGRAM_TOKEN}`);

// ✅ Express route to handle Telegram updates
app.post(`/${TELEGRAM_TOKEN}`, express.json(), (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

// ✅ Website → Telegram
io.on("connection", (socket) => {
  console.log("User connected");

  // Text messages
  socket.on("chat message", (msg) => {
    bot.sendMessage(TELEGRAM_CHAT_ID, msg)
      .then(() => console.log("✅ Sent to Telegram"))
      .catch(err => console.error("❌ Telegram error:", err));
  });

  // File uploads
  socket.on("file upload", (file) => {
    const buffer = Buffer.from(file.data);
    let sendPromise;

    if (file.type.startsWith("image/")) {
      sendPromise = bot.sendPhoto(TELEGRAM_CHAT_ID, buffer, { caption: file.name });
    } else {
      sendPromise = bot.sendDocument(TELEGRAM_CHAT_ID, buffer, { caption: file.name });
    }

    sendPromise.catch(err => console.error("❌ Telegram error:", err));
  });
});

// ✅ Telegram → Website
bot.on("message", async (msg) => {
  console.log("Telegram message received:", msg);

  // Text
  if (msg.text) {
    io.emit("chat message", msg.text);
  }

  // Photo
  if (msg.photo) {
    const fileId = msg.photo[msg.photo.length - 1].file_id; // largest size
    const file = await bot.getFile(fileId);
    const fileUrl = `https://api.telegram.org/file/bot${TELEGRAM_TOKEN}/${file.file_path}`;
    io.emit("chat message", { type: "photo", url: fileUrl });
  }

  // Document
  if (msg.document) {
    const fileId = msg.document.file_id;
    const file = await bot.getFile(fileId);
    const fileUrl = `https://api.telegram.org/file/bot${TELEGRAM_TOKEN}/${file.file_path}`;
    io.emit("chat message", { type: "document", name: msg.document.file_name, url: fileUrl });
  }
});

// Start server
server.listen(3000, () => console.log("Server running on port 3000"));

// Quick test message
bot.sendMessage(TELEGRAM_CHAT_ID, "Test message from backend");
