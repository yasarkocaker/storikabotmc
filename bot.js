const Discord = require("discord.js"); //'Vu4ll#0586
const client = new Discord.Client({ disableMentions: "everyone" });
const fs = require("fs");
const config = require("./json/config.json");
require("./util/eventHandler.js")(client);

// bot durum
client.on("ready", async () => { //'Vu4ll#0586
  client.user.setPresence({
    activity: {
      name: `Developed by: 'Vu4ll#0586`,
      type: `WATCHING`
    },
    status: "idle"
  });
});

client
  .login(config.token)
  .then(() => console.log(`${client.user.username} ile giriş yapıldı`))
  .catch(err => console.log(`Giriş yapılırken hata oluştu!\n${err}`)); //'Vu4ll#0586

// command handler
const log = message => {
  console.log(`${message}`);
};
//'Vu4ll#0586
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./cmds/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => { //'Vu4ll#0586
    let props = require(`./cmds/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});