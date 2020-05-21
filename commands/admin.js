exports.run = async (client, message, args) => {
    const eco = require("discord-economy");
    if(!message.member.roles.some(r=>["Master", "Moderator"].includes(r.name))) return message.reply('Tens de ser admim para excutar este comando!')
    let profile = await eco.AddToBalance(message.author.id, 10000)
    message.reply(`Admin comando executado com sucesso!Tens ${profile.newbalance} coins`)
}