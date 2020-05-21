const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js')

exports.run = async (client, message, args) => {
    if(!message.member.roles.some(r => ["Master", "👑Fundador👑"].includes(r.name))) return message.reply("Desculpa, mas não podes fazer isso.");
    // if(!message.member.hasPermission("MANAGE_MEMBERS")) 
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!rMember) return message.reply("Não foi possivel encontrar esse usuário.");
    let role = args.join(" ").slice(22);
    if(!role) return message.reply("Especifica a role!");
    let gRole = message.guild.roles.find(r => r.name === args[1]);
    if(!gRole) return message.reply("Não foi possivel encontrar essa role.");

    if(rMember.roles.has(gRole.id)) return message.reply("Esse usuário ja tem essa role.");
    await(rMember.addRole(gRole.id));

    try{
        await message.channel.send(`Parabêns, deste role de ${gRole.name} a <@${rMember.id}>`)
    } catch(e) {
        message.channel.send(`Parabêns para <@${rMember.id}>, deste role de ${gRole.name}.`)
    }
}

module.exports.help = {
    name: "addrole"
}