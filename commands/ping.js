exports.run = async (client, message, args) => {
   const m = await message.channel.send("Ping?");
    m.edit(`O ping é ${m.createdTimestamp - message.createdTimestamp}ms. A latencia da API é de ${Math.round(client.ping)}ms`)
}