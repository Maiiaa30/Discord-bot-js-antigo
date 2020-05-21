const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    let embed = new Discord.RichEmbed()
    .setColor([113, 149, 68])
    .setAuthor("[PT] Plata Cs Go Server", client.user.avatarURL)
    .addField("Ip: ", "92.42.44.226:27210", true)
    .addField("Clica para te conectares!", "steam://connect/92.42.44.226:27210", true)
    .setFooter("Plata Rp ❤️", client.user.avatarURL, true)
    .setTimestamp();

    message.channel.send(embed);
}