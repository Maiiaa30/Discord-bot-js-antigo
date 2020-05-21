exports.run = async (client, message, args) => {
    const eco = require("discord-economy");
    if(!message.member.roles.some(r=>["Master", "Moderator", "👑Fundador👑"].includes(r.name))) return message.reply('Tens de ser admim para excutar este comando!')
    
    let output = await eco.ResetDaily(message.author.id)
    message.reply(output)
}