/* global Map */
const Discord = require("discord.js");
const prefix = '?';
const jimp = require('jimp');
const client = new Discord.Client();
const toapng = require("gif-to-apng");
const PngImg = require('png-img');
let queue = new Map();
const db = require("quick.db");
const cooldown = require("./cooldown.js");
const utils = require("./utils.js")
const download = require('download-file');
const active = new Map();
const ping = require('minecraft-server-util')
const ms = require('ms');
const config = require("./config.json");


client.on("ready", () => {
    console.log(`Bot iniciado`);
    client.user.setActivity(`?help`);
});

client.on("guildCreate", guild => {
    db.set(guild.id,  []).write()
    console.log(`O bot entrou no servidor: ${guild.name} (id: ${guild.id}). Popuplação: ${guild.memberCount} membros!`)
    client.user.setActivity(`Estou em ${client.guilds.size} servidores`)
});

client.on("guildDelete", guild => {
    console.log(`O bot foi removido do servidor: ${guild.name} (id: ${guild.id})`)
    client.user.setActivity(`Serving ${client.guilds.size} servers`)
});

client.on('raw', async dados => {
    if(dados.t !== "MESSAGE_REACTION_ADD" && dados.t !== "MESSAGE_REACTION_REMOVE") return
    if(dados.d.message_id != "658913743169650688") return

    let servidor = client.guilds.get("638444602474364932")
    let membro = servidor.members.get(dados.d.user_id)

    let cargo1 = servidor.roles.get('658916502853910559'),
        cargo2 = servidor.roles.get('658916548513366036')

    if(dados.t === "MESSAGE_REACTION_ADD"){
        if(dados.d.emoji.name === "👌"){
            if(membro.roles.has(cargo1)) return
            membro.addRole(cargo1)
        }else if(dados.d.emoji.name === "🤓"){
            if(membro.roles.has(cargo2)) return
            membro.addRole(cargo2)
        }
    }
    if(dados.t === "MESSAGE_REACTION_ADD"){
        if(dados.d.emoji.name === "👌"){
            if(membro.roles.has(cargo1)) return
            membro.removeRole(cargo1)
        }else if(dados.d.emoji.name === "🤓"){
            if(membro.roles.has(cargo2)) return
            membro.removeRole(cargo2)
        }
    };
});

client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(message.content.indexOf(config.prefix) !== 0) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    // if(message.content.indexOf(client.prefix) === 0) return;

    // const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();

    try{
        let ops = {
            active: active
          }
        let commands = require(`./commands/${comando}.js`)
        commands.run(client, message, args, ops)
    } catch(error) {} 
    finally {}

    switch (args[0]) {
        case 'mute':
            let person = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]))
            if(!person) return message.reply('Não foi possivel encontrar esse user.')
            
            let mainrole = message.guild.roles.find(role => role.name === "Cucu");
            let muterole = message.guild.roles.find(role => role.name  === "Mute");

            if(!muterole) return message.reply('Não existe role de mute. Cria uma role chamada Mute.')

            let time = args[2];

            if(!time) {
                return message.reply('Não colocaste o tempo para dar mute.');
            }

            person.removeRole(mainrole.id);
            person.addRole(muterole.id);

            message.channel.send(`@${person.user.tag} esta agora mute por ${ms(ms(time))}`)

            setTimeout(function() {
                person.addRole(mainrole.id);
                person.removeRole(muterole.id);
                message.channel.send(`@${person.user.tag} esta agora unmuted!`)
            }, ms(time));

            break;
    }

    let user = message.author;
    let xp = await db.fetch(`xp_${user.id}`);
    if(xp === null) xp = 0;
    let level = await db.fetch(`level_${user.id}`);
    if(level === null) level = 0;
    let total_points = await db.fetch(`total_points${user.id}`);
    if(total_points === null) total_points = 0;
    
    if(!cooldown.is(user.id)) {
        cooldown.add(user.id);
        let add = Math.floor(Math.random() * 15) + 10;
        db.add(`xp_${user.id}`, add);
        db.add(`total_points${user.id}`, add);
        setTimeout(() => {
            cooldown.remove(user.id);
        }, 1000 * 30);
    }

    while(xp >= utils.need(level+1)) {
        if(xp >= utils.need(level+1)) {
            db.subtract(`xp_${user.id}`, utils.need(level+1));
            db.add(`level_${user.id}`, 1)
            xp = await db.fetch(`xp_${user.id}`);
            level = await db.fetch(`level_${user.id}`);
            let embed = new Discord.RichEmbed()
            .setAuthor("Level up")
            .setDescription("Subiste de nivel, parabens agora estas **nivel " + level + "**!:clap: ")
            .setColor([54, 57, 163]);
            message.channel.send(embed);
        }
    }

    // ciar
    if(comando === "criar") {
        db.get(message.guild.id).push({
            id : message.author.id,
            nick: message.author.username,
            avatar: message.author.avatarURL
        }).write()
        message.channel.send('Perfil criado com sucesso!')
    }
    // editar
    if(comando === "editar") {
        if(!args[0])return message.channel.send('Não colocaste um argumento para editar!')
        let = [novonome] = args
        db.get(message.guild.id).find({id: message.author.id}).assign({nick: novonome}).write()
        message.channel.send('Perfil editado com sucesso!')
    }
    // apagar
    if(comando === "apagar") {
        db.get(message.guild.id).remove({id: message.author.id}).write()
    }

});

client.on("guildMemberAdd", async member => {
    const channel = member.guild.channels.find(channel => channel.name === 'programaçao-da-festa');
    if(!channel) return;
    channel.send(`Boas ${member} esta e a nova transferência do arentim ${member.guild.name}!`)
    let canal = client.channels.get("646804230262226986")
    let fonte = await jimp.loadFont(jimp.FONT_SANS_32_BLACK)
    let mask = await jimp.read('mascara.png')
    let fundo = await jimp.read('fundo.png')
    
    jimp.read(member.user.displayAvatarURL).then(avatar => {
            avatar.resize(130, 130)
            mask.resize(130, 130)
            avatar.mask(mask)
            fundo.print(fonte, 170, 175, member.user.username)
            fundo.composite(avatar, 40, 90).write('welcome.png')
            canal.send(``, { files: ["welcome.png"]})

            console.log('Imagem enviada para o discord!')
        })
        .catch (err => {
            console.log('Erro ao carregar a imagem')
        });
    })

    client.on("guildMemberRemove", async member => {
        const out = member.guild.channels.find(channel => channel.name === 'programaçao-da-festa')
        if(!out) return;
        channel.send(`Xauu Xauuu ${member.user.username} foi para as reservas que se fodeu (${member.guild.name})`)
        let canal = client.channels.get("646804230262226986")
    })


client.login(config.token);
