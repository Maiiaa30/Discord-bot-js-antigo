exports.run = async (client, message, args) => {
    if(!message.member.roles.some(r=>["Master", "Moderator", "👑Fundador👑"].includes(r.name)))
        return message.reply("Não tens permissoes suficientes para usar este comando");
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
        return message.reply("Menciona um membro valido deste servidor!");
    if(!member.kickable)
        return message.reply("Não posso kickar essa pessoa! Tens role para poder kickar pessoas?")
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Sem razão";
    await member.kick(reason)
    .catch(error => message.reply(`Desculpa ${message.author} não posso kickar porque: ${error}`));
    message.reply(`${member.user.tag} foi kick por ${message.author.tag} porque: ${reason}`);
    console.log('Kick com sucesso!');
}