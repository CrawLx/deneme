const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
    const embedyardim = new Discord.RichEmbed()
        .setTitle("XiR| Eğlence Komutları!**")
        .setThumbnail('https://i.postimg.cc/sXYZLYjD/onhbteglence.gif')
        .setDescription( ` 💊 Ping: ${Date.now() - message.createdTimestamp} ms`)
        .setColor("#FF8C00")
        .setAuthor(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
        .addField(ayarlar.prefix + "alkış", "Bot Alkışlar!")
        .addField(ayarlar.prefix + "anket",  "Anket Yapmanızı sağlar!")
        .addField(ayarlar.prefix + "çeviri",  "Çeviri yapmanızı sağlar (Translate)!")
        .addField(ayarlar.prefix + "gif",  "Rastgele Gif Atarsınız.!")
        .addField(ayarlar.prefix + "aşkölçer",  "Aşk Ölçer!")
        .addField(ayarlar.prefix + "atasözü",  "Rastgele Atasözü Atar.!")
        .addField(ayarlar.prefix + "avatar",  "Avatarınızı gösterir. +avatar @XiR#6711  yaparsanız bahsettiğiniz kullanıcının avatarını gösterir.!")
        .addField(ayarlar.prefix + "hava", "Bölgenizdeki Havadurumunu gösterir!")
        .addField(ayarlar.prefix + "emojiyazı",  "Mesajınızı emoji haline getirir!")
        .addField(ayarlar.prefix + "yapımcım",  "Botun Yapımcısını gösterir!")
        .addField(ayarlar.prefix + "hesapla",  "Belirtilen Matematik işlemini yapar.!")
        .addField(ayarlar.prefix + "kullanıcıbilgim",  "Komutu kullanan kişi hakkında bilgi verir.!")
        .addField(ayarlar.prefix + "mesajdöndür",  "Mesajınızı tersden yazar.!")
        .addField(ayarlar.prefix + "roblox",  "Roblox bilgilerinizi gösterir.!")
        .addField(ayarlar.prefix + "server-resim",  "Server resmini gösterir.!")
        .addField(ayarlar.prefix + "slots",  "Slot oyunu oynatır.!")
        .addField(ayarlar.prefix + "tersrenk",  "Avatarın renklerini ters çevirir.!")
        .addField(ayarlar.prefix + "çekilişyap", " Çekiliş yapmanızı sağlar.!")
        .addField(ayarlar.prefix + "şifre",  "Rastgele bir şifre oluşturur.!")
        .addField(ayarlar.prefix + "sunucubilgi",  "Sunucu hakkında bilgi verir.!")
        .addField(ayarlar.prefix + "efkar",  "Efkarlanırsınız.!")
    
        .setFooter("Diğer Komuta ulaşmak için: " + ayarlar.prefix + "yardım2")
        message.react("🤣")
    if (!params[0]) {
        const commandNames = Array.from(client.commands.keys());
        const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
        message.channel.send(embedyardim);
    } else {
        let command = params[0];
        if (client.commands.has(command)) {
            command = client.commands.get(command);
            message.author.send('', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
        }
    }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['h', 'halp', 'help', 'y',"y1"],
    permLevel: 0
};

exports.help = {
    name: 'yardım',
    description: 'Tüm komutları gösterir.',
    usage: 'yardım [komut]'
};
//XiR Yardım Menüsü