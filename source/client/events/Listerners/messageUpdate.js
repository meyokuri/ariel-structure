import client from "../../../../mainClient.js";

client.on("messageUpdate", async (old, msg) => {
  if (msg?.author?.bot) return;
  if (old?.content == msg?.content) return;
  client.emit("messageCreate", msg);
});
