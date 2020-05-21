exports.run = async (client, message, args) => {
    const eco = require("discord-economy");

    let user = message.mentions.users.first()

    if(!user) return message.reply('Por favor diz um membro para eu apagar da database!')

    if(!message.member.roles.some(r=>["Master", "Moderator"].includes(r.name))) return message.reply('Tens de ser admim para excutar este comando!')

    let output = await eco.Delete(user.id)
    if(output.deleted == true) return message.reply('O usuário foi apagado da database com sucesso!')

    message.reply('Error: Não encontrei esse user na database!')
}