const Discord = require('discord.js');
const db = require('quick.db');
const utils = require('../utils.js')

exports.run = async (client, message, args) => {
    let user = message.author;

    let xp = await db.fetch(`xp_${user.id}`);
    if(xp === null) xp = 0;
    let level = await db.fetch(`level_${user.id}`);
    if(level === null) level = 0

    let need = utils.need(level+1);

    const embed = new Discord.RichEmbed()
    .setColor([54, 57, 63])
    .setAuthor("Rank: " + user.username, user.avatarURL)
   // .setThumbnail(user.avatarURL)
    .setDescription("Level: " + level + "[" + xp + "/" + need + "]")
    .setTimestamp();

    message.channel.send(embed)
}