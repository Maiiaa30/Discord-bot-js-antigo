exports.run = (client, message, args) => {
    if(!message.channel.permissionsFor(message.author).hasPermission("MANAGE_MESSAGES")) {
        message.channel.sendMessage("Desculpa, mas não tens permissoes para usar este comando \"" + message.content+"\"");
        console.log("Desculpa mas não tens permissoes para usar este comando \""+message.content+"\"");
        return;
    } else if(!message.channel.permissionsFor(client.user).hasPermission("MANAGE_MESSAGES")) {
        message.channel.sendMessage("Desculpa, mas não tens permissoes para usar este comando \"" + message.content+"\"");
        console.log("Desculpa mas não tens permissoes para usar este comando \""+message.content+"\"");
        return;
    }

    if(message.channel.type == 'text') {
        message.channel.fetchMessages()
        .then(messages => {
            message.channel.bulkDelete(messages);
            messagesDeleted = messages.array().length;

            message.channel.sendMessage('Mensagens apagadas com sucesso. Total de mensagens apagadas: '+messagesDeleted);
            console.log('Mensagens apagadas com sucesso. Total de mensagens apagadas: '+messagesDeleted);
        })
        .catch(err => {
            console.log('Erro a apagar mensagens');
            console.log(err);
        })
    }
}