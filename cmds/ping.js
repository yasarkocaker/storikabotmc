const Discord = require("discord.js");

exports.run = async (client, message) => { //'Vu4ll#0586
  message.channel.send(`Pingim: ${client.ws.ping}ms`);
};

exports.help = {
  name: "ping",
  description: "Botun pingini gösterir",
  usage: "ping",
  aliases: [],
  kategori: "Bot"
};
