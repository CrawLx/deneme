const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`BOT: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("online");
   var oyun = [
        "🔱Bot Yapımcısı CrawL 👑",
        "💪 7/24 Aktif Bot!🤛",  
        "💡 C!botdavet | Botumuzu ekleyin",,
        "🔥 C!yardim 🔥 + C!davet 🔥 + C!botdavet + C!canlidestek🔥 ",
        "🏆Prefixim |C!|🏆",
        "🇹🇷 Kolay Kullanışlı Türkçe Bot 🇹🇷"
     
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setActivity(oyun[random], "https://www.twitch.tv/CrawLBot7/24");
        }, 2 * 2500);
}