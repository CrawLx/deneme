const Discord = require('discord.js');
exports.run = function(client, message, args) {
 let guild = message.guild
 let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Gerekli bilgiler verilmedi. Bu şekilde kullanınız. \n [**p!botekle <Botunun ID> ve <Prefixi>`**]`');
  message.delete();
 let channel = guild.channels.find('id', '560940178923847696'); // Botun bilgilerinin gönderileceği kanal id
   const embed = new Discord.RichEmbed()
  .setColor(0x00AE86)
  .setTimestamp()
  .addField('Botunun İD & PREFİX:', mesaj)
  .addField('Başvuran Kişi:', `${message.author.username}#${message.author.discriminator}`)
  return guild.channels.get(channel.id).sendEmbed(embed);
   channel.send(mesaj);
   channel.send(message.author.username)
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['botekle','botumuekle'],
  permLevel: 0
};
exports.help = {
  name: 'botadd',
  description: '',
  usage: ''
};