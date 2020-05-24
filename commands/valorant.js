const Discord = require('discord.js');


exports.run = (client, message, agrs) => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle('Valorant Maiaa Rank')
    .addField("Rank", "Silver 1" , true)
    .addField("Name", "Likuyl#CDF" , true)

    message.channel.send(embed)

    const embed2 = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle('Valorant Rui Rank')
    .addField("Rank", "Gold 3" , true)
    .addField("Name", "IROKOMATA#BR1" , true)
    .setFooter("Criado por Maia ❤️", client.user.avatarURL, true)

    message.channel.send(embed2)

    const embed3 = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle('Valorant Joao Rank')
    .addField("Rank", "Gold 1" , true)
    .addField("Name", "J1M1#Puta" , true)
    .setFooter("Criado por Maia ❤️", client.user.avatarURL, true)

    message.channel.send(embed3)

}
