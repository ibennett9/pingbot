const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {

    console.log('I am ready!');

});

 
const prefix = "!";
client.on("message", (message) => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(prefix)) return;

  var args = message.content.slice(prefix.length).trim().split(/ +/g);
  var command = args.shift().toLowerCase();

  switch (command){
      case "ping":
          if (!args[0].mentions.users.first()) return;
          let user = args[0].mentions.users.first();
          args.shift();
          let repeat = args.shift();
          if(!Number.isInteger(repeat)) return;
          repeat = Math.abs(repeat);
          message.channel.send(`You want to ping <@${user.id}> ${repeat} times`);
          break;
          case "foo":
              message.channel.send("bar!");
  }
  
});

client.login(process.env.BOT_TOKEN);