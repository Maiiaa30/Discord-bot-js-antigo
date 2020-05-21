const Discord = require("discord.js");

exports.run =  async (client, message, args => {
    client.on('raw', async dados => {
        if(dados.t !==  "MESSAGE_REACTION_ADD" && dados.t !== "MESSAGE_REACTION_REMOVE") return 
        if(dados.d.message_id != args[1]) return

        let servidor = client.guil.get(agrs[2])
        let membro = servidor.members.get(dados.d.user_id)

        let role = servidor.roles.get("658916502853910559"), 
            role2 = servidor.roles.get("658916548513366036")

        if(dados.t === "MESSAGE_REACT_ADD") {
            if(dados.d.emoji.nome === "👌") {
                if(membro.roles.has(role)) return
                membro.addRole(role)
            } else if(dados.d.emoji.nome === "🤓") {
                if(membro.roles.has(role2)) return
                membro.addRole(role2)
            }
        }

        if(dados.t === "MESSAGE_REACT_REMOVE") {
            if(dados.d.emoji.nome === "👌") {
                if(membro.roles.has(role)) return
                membro.removeRole(role)
            } else if(dados.d.emoji.nome === "🤓") {
                if(membro.roles.has(role2)) return
                membro.removeRole(role2)
            }
        }
    });
})