exports.run = async (client, message, args) => {
    const eco = require("discord-economy");

    let flip = args[0]
    let amount = args[1]

    if(!flip || !['tails', 'heads'].includes(flip)) return message.reply('Por favor especifica o flip, heads ou tails!')
    if(!amount) return message.reply('Não colocaste valor para apostar!')

    let output = await eco.FetchBalance(message.author.id)
    if(output.balance < amount) return message.reply('Não tens esses coins todos para apostar. Tenta ?balance para veres quantos coins tens!')

    let gamble = await eco.Coinflip(message.author.id, flip, amount).catch(console.error)
    message.reply(`${gamble.output}! Novo balance: ${gamble.newbalance}`)
} 