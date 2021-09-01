const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "invite",
  aliases: ["inv"],
  description: "Invite the bot to your server.",
  execute(message) {

    let inviteEmbed = new MessageEmbed()
      .setTitle("Add us to your server!")
      .setDescription("Love using Multy Staging? Great, Thank you! Consider adding it to your server")
      .setColor("#F0EAD6")
      .setAuthor('Multy Canary','https://cdn.discordapp.com/avatars/862665680012836884/7cf4e1082958095aefbfda39b6298046.png?size=256f')
      
      .addField(`Use the following link to add Multy Staging to your discord server`, ' https://dsc.gg/multy-staging-invite ', true)

    inviteEmbed.setTimestamp();

    return message.channel.send(inviteEmbed).catch(console.error);
  }
};