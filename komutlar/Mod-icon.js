const Discord = require("discord.js");

exports.run = (client, message, params) => {
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
      .setColor("#36393F")
      .setTimestamp()
      .setFooter("© 2020 ro-BOT", client.user.avatarURL())
      .setAuthor(message.author.username, message.author.avatarURL())
      .addField(":warning: Uyarı :warning:","`sunucuresmi` adlı komutu özel mesajlarda kullanamazsın.");
    return message.author.send(ozelmesajuyari);
  }
  if (message.channel.type !== "dm") {
    const sunucubilgi = new Discord.MessageEmbed()
      .setAuthor(message.guild.name)
      .setColor("#36393F")
      .setImage(message.guild.iconURL({ dynamic: false, format: 'png', size: 1024 }))
      .setTimestamp()
      .setFooter("StorikaNW");
    return message.channel.send(sunucubilgi);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sunucupp"],
  permLevel: 2
};

exports.help = {
  name: "icon",
  description: "Sunucu Resminin Linkini Atar.",
  usage: "sunucuresmi"
};
