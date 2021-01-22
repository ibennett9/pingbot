const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    console.log('I am ready!');
});
const prefix = "!";
client.on("message", (message) => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(prefix)) return;
    message.reply('You sent a command');
  var args = message.content.slice(prefix.length).trim().split(/ +/g);
  var command = args.shift().toLowerCase();
message.channel.send(`${command}`);
  switch (command){
      case "troll":
          troll(message);
//           message.channel.send('Command recieved');
//           if (!args[0].mentions.users.first()) return;
//           let userPerson = args[0].mentions.users.first();
//           message.channel.send(`You want to ping <@${userPerson.id}`);
//           args.shift();
//           let repeat = args.shift();
//           if(!Number.isInteger(repeat)) return;
//           repeat = Math.abs(repeat);
//           message.channel.send(`You want to ping <@${userPerson.id}> ${repeat} times`);
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
    message.channel.send('Command recieved');
    if (!args[0].mentions.users.first()) return;
        let userPerson = args[0].mentions.users.first();
          message.channel.send(`You want to ping <@${userPerson.id}`);
          args.shift();
          let repeat = args.shift();
          if(!Number.isInteger(repeat)) return;
          repeat = Math.abs(repeat);
          message.channel.send(`You want to ping <@${userPerson.id}> ${repeat} times`);
}

function foo(message){
  message.channel.send("Bar!");
}
