exports.run = async (client, message, args) => {
    const eco = require("discord-economy");
  /*  let output = await eco.Work(message.author.id)

    if(output.earned == 0) return message.reply('Ups! Nao fizeste o teu trabalho bem por isso não vais receber nada!')
    message.channel.send(`${message.author.username}
    Trabalhas te como \`${output.job} \` e ganhas te :money_with_wings: ${output.earned}
    Agora tens :money_with_wings: ${output.balance}`) */

    let output2 = await eco.Work(message.author.id, {
        failurerate: 10,
        money: Math.floor(Math.random() * 250),
        jobs: ['Uber', 'Mecânico']
    })
    if(output2.earned == 0) return message.reply(`Ups! Não fizeste o teu trabalho bem por isso não vais ganhar coins!`)

    message.channel.send(`${message.author.username}
    Trabalhas te como \`${output2.job}\` e ganhas te :money_with_wings: ${output2.earned}
    Agora tens :money_with_wings: ${output2.balance}`)
}