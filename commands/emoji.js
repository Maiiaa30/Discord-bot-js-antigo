exports.run = async (client, message, args) => {
    const toapng = require("gif-to-apng");
    const download = require('download-file');
    let info = {filename: "emoji.gif"}
    let [nome, emojilink] = args
    if(!args[0]) return message.channel.send('Esqueceste de adiconar is argumentos \n ?emoji <nome> <link.gif>')
    if(!args[1]) return message.channel.send('Esqueceste de adiconar is argumentos \n ?emoji <nome> <link.gif>')


    download(emojilink, info, function(err) {
        if(!err) {
            console.log("gif identificado")
            toapng('emoji.gif')
            .then(() => {
                message.guild.createEmoji('emoji.png', nome)
                message.channel.send("o emoji foi adiconado/convertido com sucesso!")
            })
            .catch(error => console.log('Não foi adicionar a imagem', error))
        } else {
            message.channel.send("Link invalido!")
        }
    })
}