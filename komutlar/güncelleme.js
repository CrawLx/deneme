
const Discord = require("discord.js");
const {RichEmbed} = require("discord.js");
const fs = require("fs");
let changeLog = fs.readFileSync("./güncelleme.txt", "utf-8");
module.exports.run = async (client, message) => {
    let embedMessages = message.channel.permissionsFor(message.guild.me).has("EMBED_LINKS");
    if(!embedMessages) return message.channel.send(changeLog);
    const embed = new RichEmbed()
    .setColor(0x00AE86)
    .setAuthor("Güncellemeler")
    .setDescription(`**${changeLog}**`)
    message.channel.send(embed);
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yenilikler","güncelleme"],
  permLevel: 0
};

module.exports.help = {
  name: "güncellemeler",
  description: "güncelleme.txt dosyasına yazdığınız yazıları çeker.",
  usage: "yenilikler"
};