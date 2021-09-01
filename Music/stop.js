////////////////////////////
//////CONFIG LOAD///////////
////////////////////////////
const { canModifyQueue } = require("../util/nkm");
const { Client, Collection, MessageEmbed } = require("discord.js");
const { attentionembed } = require("../util/attentionembed"); 
const { approveemoji,  denyemoji,  PREFIX,} = require(`../config.json`);
////////////////////////////
//////COMMAND BEGIN/////////
////////////////////////////
module.exports = {
  name: "stop",
  description: "Stops the music",
  aliases: ["leave", "end"],
  cooldown: 5,
  edesc: `Type the Command, to stop playing and leave the channel.\nUsage: ${PREFIX}stop`,

async execute(message,args,client) {
  //if not in a guild retunr
  if (!message.guild) return;
  //react with approve emoji
  message.react(approveemoji).catch(console.error);
  const { channel } = message.member.voice;
  //get the serverQueue
  const queue = message.client.queue.get(message.guild.id);
  //if not a valid channel
  if (!channel) return attentionembed(message, "Please join a Voice Channel first");  
  //If not in the same channel return error
  if (queue && channel !== message.guild.me.voice.channel)
  return attentionembed(message, `You must be in the same Voice Channel as me`);
  //if no Queue return error
  if (!queue)
    return attentionembed(message, "There is nothing you can stop!");
  //if not in the same channel return
  if (!canModifyQueue(message.member)) return;
  //Leave the channel
  await channel.leave();
  //send the approve message    
  message.channel.send(new MessageEmbed()
  .setColor("#F0EAD6")
  .setAuthor(`${message.author.username} stopped the music!`, "https://media.discordapp.net/attachments/850619329628471336/866186031841411103/9e03a65f07f0efdebbe291fccd718f4d.gif?width=624&height=468"))
  .catch(console.error);
  }
};
