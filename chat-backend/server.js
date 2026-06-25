// server.js

const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const TelegramBot = require("node-telegram-bot-api");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// 🔑 Bot token from BotFather
const TELEGRAM_TOKEN = "8914107820:AAFhd7Gw4yMDZdzsVehu1s7DSq87u20rEb8";

// 🔑 Numeric group chat ID (replace with your actual ID)
const TELEGRAM_CHAT_ID = -5253636291; // example: -8636291

const bot = new TelegramBot(TELEGRAM_TOKEN, { polling: true });

// ✅ Website → Telegram
io.on("connection", (socket) => {
  console.log("User connected");

  // Text messages
  socket.on("chat message", (msg) => {
    console.log("Website sent text:", msg);
    bot.sendMessage(TELEGRAM_CHAT_ID, msg)
      .then(() => console.log("✅ Sent to Telegram"))
      .catch(err => console.error("❌ Telegram error:", err));
  });

  // File uploads
  socket.on("file upload", (file) => {
    console.log("Website sent file:", file.name, file.type);
    const buffer = Buffer.from(file.data);

    let sendPromise;
    if (file.type.startsWith("image/")) {
      sendPromise = bot.sendPhoto(TELEGRAM_CHAT_ID, buffer, { caption: file.name });
    } else {
      sendPromise = bot.sendDocument(TELEGRAM_CHAT_ID, buffer, { caption: file.name });
    }

    sendPromise
      .then(() => console.log("✅ File sent to Telegram"))
      .catch(err => console.error("❌ Telegram error:", err));
  });
});

// ✅ Telegram → Website
bot.on("message", (msg) => {
  console.log("Telegram message received:", msg);

  if (msg.text) {
    io.emit("chat message", { msg: msg.text, isSelf: false });
  }
  if (msg.photo) {
    io.emit("chat message", { msg: "[Photo received]", isSelf: false });
  }
  if (msg.document) {
    io.emit("chat message", { msg: `[File: ${msg.document.file_name}]`, isSelf: false });
  }
});

// Start server
server.listen(3000, () => console.log("Server running on port 3000"));
