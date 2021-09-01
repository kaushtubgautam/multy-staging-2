const { canModifyQueue } = require("../util/nkm");
const { Client, Collection, MessageEmbed } = require("discord.js");

const { attentionembed } = require("../util/attentionembed"); 
const {
  approveemoji,
  denyemoji,
  PREFIX,
} = require(`../config.json`);
module.exports = {
  name: "pause",
  aliases: ["pa"],
  description: "Pause the currently playing music",
  cooldown: 5,
  edesc: `Type this command to pause the Song!\nUsage: ${PREFIX}pause`,
  execute(message) {
    //If not in a guild return
    if(!message.guild) return;
    //get the queue
    const queue = message.client.queue.get(message.guild.id);
    //if no queue return error
    if (!queue) return attentionembed(message, "There is nothing playing").catch(console.error);
    //If not in the same channel return
    
    //If its playing
    if (queue.playing) {
      //set playing to false
      queue.playing = false;
      //pause the music
      queue.connection.dispatcher.pause(true);
      //define the pause embed
      const pausemebed = new MessageEmbed().setColor("#F0EAD6")
      .setAuthor(`${message.author.username} paused the music.`, "https://media.discordapp.net/attachments/850619329628471336/866186031841411103/9e03a65f07f0efdebbe291fccd718f4d.gif?width=624&height=468")
      //react with approve emoji
      message.react(approveemoji)
      //return message
      return queue.textChannel.send(pausemebed).catch(console.error);
    }
  }
};
