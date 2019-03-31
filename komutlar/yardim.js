const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setThumbnail("https://78.media.tumblr.com/10b366f294d47b40d857d6e47872d0dc/tumblr_ntubqoYYsF1sqwlqgo3_250.gif")
  .setTitle("**Komutlar**")
  .setDescription('')
  .setColor(0x00ffff)
  .addField(" **Eğlence komutları **", `Eğlence Komutlarını Gösterir.** >eğlence **`)
  .addField(" **Eğlence komutları - 2 ** ", `Eğlence Komutlarının Devamını Gösterir.** >eğlence2 **`) 
  .addField(" **Yetkili komutları **", `Yetkili Komutlarını Gösterir.** >yetkili **`) 
  .addField(" **Ana komutları ** ", `Ana Komutları Gösterir.** >anakomutlar **`)
  .addField(" **Müzik Komutları ** ", `Müzik Komutlarını Gösterir.** >C!müzik Yazman yeterli**`)


   
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
    message.react('533358941632069652')
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardim',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
