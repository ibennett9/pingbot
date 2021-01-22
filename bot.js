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
      case "troll":
          troll(message, args);
          break;
          case "foo":
              foo(message);
              break;
case "pog":
          message.reply('You are the goat :star_struck: :star_struck:');
          break;

  }
  
});

client.login(process.env.BOT_TOKEN);

function troll(message){
  
    var args = message.content.slice(prefix.length).trim().split(/ +/g);
    var userPerson = message.mentions.users.first();
    args.shift();
    args.shift();
    var repeat = args.shift();
          message.channel.send(`You want to ping <@${userPerson.id}> with ${repeat}`);
          if(!Number.isInteger(repeat)) return;
          repeat = Math.abs(repeat);
          message.channel.send(`You want to ping <@${userPerson.id}> ${repeat} times`);
}

function foo(message){
  message.channel.send("Bar!");
}
