const ayarlar = require("../json/config.json");

module.exports = message => { //'Vu4ll#0586
  let client = message.client;
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  if (!message.content.startsWith(ayarlar.prefix)) return;
  let command = message.content.split(" ")[0].slice(ayarlar.prefix.length);
  let params = message.content.split(" ").slice(1);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) { //'Vu4ll#0586
    cmd.run(client, message, params);
  }
};
