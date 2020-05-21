exports.run = async (client, message, args) => {
    const eco = require("discord-economy");
    let output = await eco.FetchBalance(message.author.id)
    message.reply(`Tens ${output.balance} coins na tua conta!`)
}