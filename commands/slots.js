exports.run = async (client, message, args) => {
    const eco = require("discord-economy");
    
    let amount = args[0] //Coins para aposta
 
    if (!amount) return message.reply('Especifica o valor para apostar!')
 
    var output = await eco.FetchBalance(message.author.id)
    if (output.balance < amount) return message.reply('Não tens essas coins todas para apostar. Tenta ?balance para ver quantos coins tens.')
 
    var gamble = await eco.Slots(message.author.id, amount, {
      width: 3,
      height: 1,
      emojis: ['👌', '🤙', '🖕', '🤘', '✌️', '🖐']
    }).catch(console.error)
    message.channel.send(gamble.grid)
    message.reply(`${gamble.output}! Novo saldo: ${gamble.newbalance}`)
 
  }