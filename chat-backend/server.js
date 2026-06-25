const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const TelegramBot = require("node-telegram-bot-api");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const TELEGRAM_TOKEN = "YOUR_TELEGRAM_BOT_TOKEN";
const TELEGRAM_CHAT_ID = "YOUR_GROUP_CHAT_ID"; // numeric ID
const bot = new TelegramBot(TELEGRAM_TOKEN, { polling: true });

// ✅ Website → Telegram
io.on("connection", (socket) => {
  console.log("User connected");

  socket.on("chat message", (msg) => {
    bot.sendMessage(TELEGRAM_CHAT_ID, msg);
    io.emit("chat message", { msg, isSelf: true });
  });

  socket.on("file upload", (file) => {
    const buffer = Buffer.from(file.data); // ArrayBuffer → Buffer

    if (file.type.startsWith("image/")) {
      bot.sendPhoto(TELEGRAM_CHAT_ID, buffer, { caption: file.name });
    } else {
      bot.sendDocument(TELEGRAM_CHAT_ID, buffer, { caption: file.name });
    }

    io.emit("chat message", { msg: `[Sent ${file.name}]`, isSelf: true });
  });
});

// ✅ Telegram → Website
bot.on("message", (msg) => {
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

server.listen(3000, () => console.log("Server running on port 3000"));
