const Discord = require('discord.js');


exports.run = (client, message, agrs) => {
    if(args[1] === "maia") {
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle('Valorant Maia Rank')
        .setDescription("Silver 1")

        message.channel.send(embed)
    }

    if(agrs[2] === "rui") {
        const embed2 = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle('Valorant Rui Rank')
        .setDescription("Gold 3")

        message.channel.send(embed2)
    }
}