const Discord = require('discord.js');
const ytdl = require('ytdl-core');

exports.run = async (client, message, args, ops) => {
    
    module.exports.run = async (client, message, args, ops) => {
    
      if (message.guild.me.voiceChannel) return message.channel.send('Sorry the bot is already connected on a voice channel.'); 
    // if the bot user is already connected to any of the guild's voice channels, this message will show up.
    
      if (!message.member.voiceChannel) return message.channel.send('Please connect to a voice channel.');
    // if the member that sent the message isn't connected to any voice channel, this message will show up. (note: `message.author` can't be used here)
    
      if (!args[0]) return message.channel.send('Sorry, please insert a valid URL.');
    // if there are no arguments (url in this case) mentioned following the command, this message will show up.
    
      let valid = await ytdl.validateURL(args[0]);
    // awaiting url validation.
    
      if (!valid) return message.channel.send('Sorry, please insert a valid URL.');
    // if the url isn't valid, this will show up.
    
      let info = await ytdl.getInfo(args[0]);
    // awaiting info. (getting audio file from the url)
    
      let connect = await message.member.voiceChannel.join();
    // connects in the same channel as the `message.author`. (note: message.member is used here because there's no such module as `message.author.voiceChannel`)
    
      let dispatcher = await connect.playStream(ytdl(args[0], {filter:'audioonly'}));
    // awaiting stream. (audio only output)
    
      message.channel.send(`Current Song: ${info.title}`);
    // sends the song's title in the channel where the command was run.
    }
  
}