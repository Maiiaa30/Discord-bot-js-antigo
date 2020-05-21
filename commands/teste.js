const Discord = require('discord.js');
const client = new Discord.Client();
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)

exports.run = async (client, message, args) => {
    db.get(message.guild.id)

    let userData = db.get(message.guild.id).push({
        id: message.author.id,
        nick: message.author.username,
        coins: 350
    }).write()
    let currentData = db.get(message.author.id).value({
        id: message.author.id,
        nick: message.author.username,
        coins: 350
    })
    let resetData = db.get(message.guild.id).remove({
        id: message.author.id,
        nick: message.author.username,
        coins: 0
    }).write()

    if(resetData < currentData) {
        let daily = 350
        client.addMoney(daily, userData);
        let dailyEmbed = new Discord.MessageEmbed()
        .setDescription(`💵 Parabens adicionaste ${daily} coins a tua conta!`)
        .setColor("#f58390")
        .setFooter(message.author.tag, message.author.displayAvatarURL())
        message.channel.send({embed: dailyEmbed})
        let resetData = client.addDays(currentData, 1);
        userData.reset = resetData;
        client.saveFile("coin.json");
    } else {
        let timeLeft = new Date(resetData - currentData);
        message.channel.reply(`Desculpa mas ainda tens de esperar ${timeLeft.getHours()} horas, e ${timeLeft.getMinutes()} minutos `)
    }
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    cat: "economy"
  };
  
  exports.help = {
    name: 'daily',
    description: 'Coleta coins todas a cada 24h',
    usage: 'daily'
  };
}