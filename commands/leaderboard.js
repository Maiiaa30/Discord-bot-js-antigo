exports.run = async (client, message, args) => {
    const eco = require("discord-economy");
    if (message.mentions.users.first()) {
    var output = await eco.Leaderboard({
        filter: x => x.balance > 50,
        search: message.mentions.users.first().id
      })
      message.channel.send(`O usário ${message.mentions.users.first().tag} é numero ${output} na leaderboard!`);
 
    } else {
 
      eco.Leaderboard({
        limit: 3,
        filter: x => x.balance > 50
      }).then(async users => { 
 
        if (users[0]) var firstplace = await client.fetchUser(users[0].userid)
        if (users[1]) var secondplace = await client.fetchUser(users[1].userid) 
        if (users[2]) var thirdplace = await client.fetchUser(users[2].userid)
 
        message.channel.send(`Leaderboard:
 
1 - ${firstplace && firstplace.tag || 'Ninguem ainda!'} : ${users[0] && users[0].balance || 'Nada'}
2 - ${secondplace && secondplace.tag || 'Ninguem ainda!'} : ${users[1] && users[1].balance || 'Nada'}
3 - ${thirdplace && thirdplace.tag || 'Ninguem ainda!'} : ${users[2] && users[2].balance || 'Nada'}`)
 
      })
 
    }
}