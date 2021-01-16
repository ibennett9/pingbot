const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {

    console.log('I am ready!');

});

 
const prefix = "!";
client.on("message", (message) => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(prefix)) return;

  if (message.content.startsWith(prefix + "ping")) {
      let user = message.mentions.users.first();
      message.channel.send(`Ping: ${user.tag}`);
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(prefix + "foo")) {
    message.channel.send("bar!");
  }
});

client.login(process.env.BOT_TOKEN);