const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    console.log('I am ready!');
});
const prefix = "!";
client.on("message", (message) => {
  // Exit and stop if it's not there
    if (message.content.contains("comrade") {heraldTheComrade(message) return;};
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
    if (userPerson.id == 277580041053798401)
    {
        message.channel.send(`You can't ping our mighty saviour Lord DinoReaper! That is an illegal move!`);
        return;
    }
    args.shift();
    args.shift();
    var repeat = Number(args.shift());
    var interval = Number(args.shift());
          if(!Number.isInteger(repeat)) return;
          repeat = Math.abs(repeat);
          if (repeat > 50) 
          {
              repeat = 50;
              message.channel.send(`You can't ping more than 50 times, don't be annoying!`);
          }
          if(!Number.isInteger(interval)){
            message.channel.send(`You want to ping <@${userPerson.id}> ${repeat} times`);
            for (var i = 0; i<repeat; i++)
            {
                message.channel.send(`<@${userPerson.id}>`);
            }
        } else {
          interval = Math.abs(interval);
          for(var i =0;i<repeat;i++)
          {
            setTimeout(function(){message.channel.send(`<@${userPerson.id}>`);}, interval);
          }
        }
}

function heraldTheComrade(message)
{
    var user = message.author;
    message.channel.send(`<'${user.id}>, you called upon your comrade friends! I am here to support you! https://acegif.com/wp-content/uploads/2020/04/soviet-flag-16.gif`);
}

function foo(message){
  message.channel.send("Bar!");
}
