const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
    if(args[0] === 0) {
        message.channel.send('Sem config para adicionar!')
    }

    let config = new db.table('cfg')
}