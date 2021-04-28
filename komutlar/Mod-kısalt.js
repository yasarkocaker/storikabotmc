const Codare = require("discord.js");
const Emirhan = require('snekfetch');
exports.run = async (message, args) => {
    const url = args.join("")
    try {
        const { body } = await Emirhan
            .post('https://www.googleapis.com/urlshortener/v1/url')
            .query({
                longUrl: url,
                key: "GOOGLE API ANAHTARINIZ" 
            })
            .send({
                longUrl: url
            });
        message.channel.send(`Kısaltılan link: ${body.id}`);
    } catch (err) {
        message.channel.send(`Bir hata ile karşılaşıldı! \`${err.message}\``);
    }
}
//codare
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['linkkısalt'],
  permLevel: 3,

};

exports.help = {
  name: "link-kısalt",
  description: "Basit bir şekilde link kısaltırsınız",
  usage: "linkkısalt https://codare.fun"
};