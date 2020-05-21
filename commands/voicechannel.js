exports.run = (client, message, args) => {
    if(!message.member.roles.some(r=>["Master", "Moderator", "👑Fundador👑"].includes(r.name)))
        return message.reply("Não tens permissoes suficientes para usar este comando");
    var server = message.guild;
    var name = args[0];

    if(!name) return message.channel.send('Coloca o nome do channel para criar!')
    
    server.createChannel(name, "voice");
}