const Discord = require("discord.js");

exports.run = (client, message, args) => {
    /**
    message.channel.send(`> ?ping = Verificar o ping do bot.
    > ?maia = Maia o Deus <3.
    > ?xico = Xico é gay.
    > ?daily = Receber coins diários.
    > ?slots = Apostar coins.
    > ?coinflip = Apostar coins.
    > ?work = Ganhar alguns coins.
    > ?balance = Ver quantos coins tens na conta.
    > ?transfer = Transferir coins para alguem.
    > ?rank = Ver o rank.
    > ?level = Verificar o level.
    > ?leaderboard = Ver a leaderboard.
    > ?avatar = Ver o avatar da pessoa.
    > ?bot = ver infos do Bot.
    > ?clear = Apagar mensagens do chat.
    > ?kick = Dar kick a alguem.
    > ?ban = Dar ban a alguem.
    > ?resetdaily = Admin comando para resetar o tempo do ?daily.
    > ?admin = Admin comando para receber alguns coins.
    `)
    */

    let embed = new Discord.RichEmbed()
    .setColor([113, 149, 68])
    .setAuthor("help", client.user.avatarURL)
    .setDescription("Comandos disponivies no bot: ")
    .addField("?daily", "Receber coins diárias.", true)
    .addField("?slots", "Apostar coins." , true)
    .addField("?coinflip", "Apostar coins.", true)
    .addField("?work", "Ganhar alguns coins.", true)
    .addField("?balance", "Ver quantos coins tens na conta.", true)
    .addField("?transfer", "Transferir coins para alguem.", true)
    .addField("?rank", "Ver o rank.", true)
    .addField("?level", "Verificar o level teu ou de alguem.", true)
    .addField("?leaderboard", "Ver a leaderboard.", true)
    .addField("?avatar", "Ver o avatar da pessoa.", true)
    .addField("?bot", "Ver infos sobre bot.", true)
    .addField("?txtchannel", "Criar canais de texto.", true)
    .addField("?voicechannel", "Criar canais de voz.", true)
    .addField("?clear", "Apagar mensagens do chat.", true)
    .addField("?kick", "Dar kick a alguem.", true)
    .addField("?ban", "Dar ban a alguem.", true)
    .addField("?resetdaily", "Comando de admin para resetar o tempo do ?daily.", true)
    .addField("?admin", "Comando de admin para receber alguns coins.", true)
    .setFooter("Criado por Maia ❤️", client.user.avatarURL, true)
    .setTimestamp();


    message.channel.send(embed);
}