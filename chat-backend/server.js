import express from "express";
import { Server } from "socket.io";
import http from "http";
import TelegramBot from "node-telegram-bot-api";

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

const token = process.env.TELEGRAM_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;
const bot = new TelegramBot(token, { polling: true });

// Website → Telegram
io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    bot.sendMessage(chatId, msg);
    io.emit("chat message", { msg, isSelf: true });
  });
});

// Telegram → Website
bot.on("message", (telegramMsg) => {
  io.emit("chat message", { msg: telegramMsg.text, isSelf: false });
});

server.listen(3000, () => {
  console.log("Backend running on port 3000");
});
