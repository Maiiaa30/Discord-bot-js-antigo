const Discord = require("discord.js");

exports.run = (client, message, args) => {
    
    let embed = new Discord.RichEmbed()
    .setColor([113, 149, 68])
    .setAuthor("Informação do bot", client.user.avatarURL)
    .setDescription("https://discordapp.com/oauth2/authorize?client_id=653742079721078795&scope=bot&permissions=2146958847")
    .addField("Guilds", ":desktop: " + client.guilds.size, true)
    .addField("Users", ":joystick: " + client.users.size, true)
    .addField("Channels", ":page_facing_up: " + client.channels.size, true)
    .addField("Pais", ":flag_pt: Portugal", true)
    .addField("Comandos", ":video_game: ?help", true)
    .setFooter("Criado por Maia ❤️", client.user.avatarURL, true)
    .setTimestamp();

    message.channel.send(embed);
}