const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  const embed = new Discord.RichEmbed()
  .setTitle("Beni sunucuna davet etmek için tıkla.")
    .setAuthor(message.author.username, message.author.avatarURL)
  .setColor("RANDOM")
  .setDescription("**Bot yapımıcısı:** <@553657578002055178>")
  .setFooter('CrawL  | 7/24 Aktif Bot', client.user.avatarURL)
  .setThumbnail("")
  .setTimestamp()
  .addField("» Linkler", `[WEB SİTE](https://bit.ly/2Tu3rPb)`+ "**\n**"+`[Destek Sunucusu](https://discord.gg/3s4XBPf)`, false)
  .setURL('https://bit.ly/2Tu3rPb')
  	.setThumbnail(client.user.avatarURL);

  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'botdavet',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'davet'
};