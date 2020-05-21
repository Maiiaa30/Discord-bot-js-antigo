exports.run = async (client, message, args) => {
    if(!message.member.roles.some(r => ["Master", "👑Fundador👑"].includes(r.name)))
        return message.reply("Não tens permissoes suficiente para usar este comando");
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
     return message.reply("Menciona um membro valido deste servidor!");
    if(!member.bannable)
        return message.reply("Não posso banir essa pessoa! Tens role para poder banir pessoas?");
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Sem razao";
    await member.ban(reason)
    .catch(error => message.reply(`Desculpa ${message.author} não posso banir porque: ${reason}`));
    message.reply(`${member.user.tag} foi banido por ${message.author.tag} porque: ${reason}`);
}