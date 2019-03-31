const Discord = require('discord.js');
exports.run = function(client, message, args) {
        var role = message.guild.roles.find(role => role.name === "Botlar")
  
    var öneri = args.slice(0).join(' ');
    var guildID = "558924943161557003";
    var channelID = "560940178923847696";
    if (!öneri){
        return message.reply("**Bir bot belirtin! \n PluxTV | Bot Onay Sistemi**");
    } else {
        
        var embed = new Discord.RichEmbed()
            .setTimestamp()
            .setColor(0x36393E)
            .addField("Onaylayan:", message.author.tag)
            .addField("Bot:", öneri)
            .setFooter(`${client.user.username} - Tüm hakları saklıdır.`, client.user.avatarURL);
        
        client.guilds.get(guildID).channels.get(channelID).send(embed);
        message.channel.send("**Bot Onay Log Gönderildi !**")

    };


};


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [""], 
  permLevel: 3
};

exports.help = {
  name: 'onayla', 
  description: "Seçilen Botu onaylar...", 
  usage: 'onayla' 
};