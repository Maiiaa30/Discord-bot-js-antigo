const {Client, RichEmbed } = require('discord.js')
const ping = require('minecraft-server-util');


exports.run = (client, message, args) => {
    if(!args[0]) return message.channel.send('Tens de escrever o ip do servidor.')
    if(!args[1]) return message.channel.send('Tens de escrever a porta do servidor(se não souberes tenta 25565).')

    ping(args[0], parseInt(args[1]), (error, reponse) =>{
        if(error) throw error
        const Embed = new RichEmbed()
        .setTitle('Server Status')
        .addField('Server IP', reponse.host)
        .addField('Server Version', reponse.version)
        .addField('Online Players', reponse.onlinePlayers)
        .addField('Max Players', reponse.maxPlayers)
       
        message.channel.send(Embed)
    })
}