module.exports.run = (client, message) => {
  const Discord = require(`discord.js`);
    
  if (message.mentions.users.size < 1) {
        
    //Finds the author nickname
    if (message.member.nickname) {var authorNick = message.member.nickname;} else {authorNick = `Değiştirilmemiş`;}
        
    //Finds the author game and/or game URL
    if (message.author.presence.game) {var authorGame = message.author.presence.game.name;} else {authorGame = `Oyun Bulunamadı`;}
        
    //Finds the author presence status
    if (message.author.presence.status === `online`) {var authorStatus = `Çevrimiçi`;}
    else if (message.author.presence.status === `idle`) {authorStatus = `Boşta`;}
    else if (message.author.presence.status === `dnd`) {authorStatus = `Rahatsız etmeyin`;}
    else if (message.author.presence.status === `offline`) {authorStatus = `Görünmez`;}

    //Finds the author join date
    var authorJoined = new Date(message.member.joinedTimestamp);

    //Finds the author registered date
    var authorRegistered = new Date(message.author.createdTimestamp);

    //Finds the author's avatar
    if (message.author.avatarURL) {var authorAvatar = message.author.avatarURL;}
    else {authorAvatar = `https://cdn.discordapp.com/embed/avatars/1.png?width=80&height=80`;}

    //Finds the author's color
    if (message.member.displayColor) {var authorColor = message.member.displayColor;} else {authorColor = `0x59D851`;}

    //The actual message
    message.channel.send(new Discord.RichEmbed()
      .setColor(authorColor)
      .setThumbnail(authorAvatar)
      .setAuthor(message.author.tag, message.author.avatarURL)
      .addField(`ID:`, message.author.id, true)
      .addField(`Nick:`, authorNick, true)
      .addField(`Durum:`, authorStatus, true)
      .addField(`Oyun:`, authorGame, true)
      .addField(`Katılım:`, authorJoined.toLocaleString(), true)
      .addField(`DC Kayıt Tarihi:`, authorRegistered.toLocaleString(), true)
      .addField(`Roller:`, message.member.roles.map(g => g.name).join(`, `), true)
    );
  } else if (message.mentions.users.size > 1) {
    message.channel.send(`:x: Çok Fazla kullanıcıdan bahsediyorsunuz **Maximum 1** kullanıcıdan bahsetmeniz gerekmektedir`);
  } else {
    //Finds the user's nickname
    if (message.mentions.members.first().nickname) {var mentionedNick = message.mentions.members.first().nickname;}
    else {mentionedNick = `Değiştirilmemiş`;}

    //Finds the user's presence status
    if (message.mentions.users.first().presence.status === `online`) {var mentionedStatus = `Çevrimiçi`;}
    else if (message.mentions.users.first().presence.status === `idle`) { mentionedStatus = `Boşta`;}
    else if (message.mentions.users.first().presence.status === `dnd`) { mentionedStatus = `Rahatsız Etmeyin`;}
    else if (message.mentions.users.first().presence.status === `offline`) { mentionedStatus = `Görünmez`;}

    //Finds the user's game
    if (message.mentions.users.first().presence.game) {var mentionedGame = message.mentions.users.first().presence.game.name;}
    else {mentionedGame = `Oyun Bulunamadı`;}

    //Finds the user's join date/time
    var mentionedJoined = new Date(message.mentions.members.first().joinedTimestamp);

    //Finds the user's register date/time
    var mentionedRegistered = new Date(message.mentions.users.first().createdTimestamp);

    //Finds the user's avatar
    if (message.mentions.users.first().avatarURL) {var mentionedAvatar = message.mentions.users.first().avatarURL;}
    else {mentionedAvatar = `https://cdn.discordapp.com/embed/avatars/1.png?width=80&height=80`;}

    //Finds the user's color
    if (message.mentions.users.first().displayColor) {var mentionedColor = message.mentions.users.first().displayColor;} else {mentionedColor = `0x59D851`;}
        
    //The actual message
    message.channel.send(new Discord.RichEmbed()
      .setColor(mentionedColor)
      .setThumbnail(mentionedAvatar)
      .setAuthor(message.mentions.users.first().tag, mentionedAvatar)
      .addField(`ID:`, message.mentions.users.first().id, true)
      .addField(`Nick:`, mentionedNick, true)
      .addField(`Durum:`, mentionedStatus, true)
      .addField(`Oyun:`, mentionedGame, true)
      .addField(`Sunucuya Katılım:`, mentionedJoined.toLocaleString(), true)
      .addField(`DC Kayıt Tarihi:`, mentionedRegistered.toLocaleString(), true)
      .addField(`Roller`, message.mentions.members.first().roles.map(g => g.name).join(`, `), true)
    );
  }
};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kullanıcı","bilgilerim","bilgim","kullanıcıi"],
  permLevel: 0
};

module.exports.help = {
  name: 'kullanıcıbilgi',
  description: 'Bilgilerinizi gösterir.',
  usage: 'kullanıcı'
};
//XiR