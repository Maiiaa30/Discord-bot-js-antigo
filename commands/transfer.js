exports.run = async (client, message, args) => {
    const eco = require("discord-economy");

    let user = message.mentions.users.first()
    let amount = args[1]

    if(!user) return message.reply('Diz o usuário que queres mandar os coins!')
    if(!amount) return message.reply('Diz os valor para tranferir')

    let output = await eco.FetchBalance(message.author.id)
    if(output.balance < amount) return message.reply('Não tens essa quantidade no teu saldo para tranferir! Tenta ?balance para veres quantos coins tens.')
    
    let transfer = await eco.Transfer(message.author.id, user.id, amount)
    message.reply(`Transferiste coins com sucesso!\nSaldo de ${message.author.tag}: ${transfer.FromUser}\nSaldo de ${user.tag}: ${transfer.ToUser}`);

}