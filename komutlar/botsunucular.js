const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {
  
  let msg =  bot.guilds.map(guild => `**${guild.name}** Üyeler: ${guild.memberCount}`).join('\n');
  let embed = new Discord.RichEmbed()
  .setTitle(`**${bot.guilds.size}** sunucuda bulunmaktayım!`)
  .setDescription(`${msg}`)
  .setColor("#ebf442");
  message.channel.send(embed);
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bsunucular"],
  permLevel: 0
};

module.exports.help = {
  name: 'botsunucular',
  description: 'Botun bulunduğu sunucuları gösterir.',
  usage: 'botsunucular'
};
//XiR