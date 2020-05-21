exports.run = async (client, message, args) => {
    const eco = require("discord-economy");
    let output = await eco.Daily(message.author.id)
    if(output.updated) {
        let profile = await eco.AddToBalance(message.author.id, 250)
        message.reply(`Recebeste os teus coins diários com sucesso! Agora tens ${profile.newbalance} coins na tua conta`)
    } else {
        message.channel.send(`Desculpa, mas ja pegaste os teus coins diários! Mas podes pagar daqui a ${output.timetowait} os teus coins diários`)
    }
}