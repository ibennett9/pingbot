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
    if (userPerson.id == 277580041053798401)
    {
        try{
        message.channel.send(`You can't ping our mighty saviour Lord DinoReaper! That is an illegal move!`);
        return;
        } catch (err)
        {
            return;
        }
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
              try
              {
              message.channel.send(`You can't ping more than 50 times, don't be annoying!`);
              } catch (err)
              {
              }
              
          }
          if(!Number.isInteger(interval)){
              try{
            message.channel.send(`You want to ping <@${userPerson.id}> ${repeat} times`);} catch (err){}
            for (var i = 0; i<repeat; i++)
            {
                try{
                message.channel.send(`<@${userPerson.id}>`);
                } catch (err) {}
            }
        } else {
          interval = Math.abs(interval);
          for(var i =0;i<repeat;i++)
          {
              try{
            setTimeout(function(){message.channel.send(`<@${userPerson.id}>`);}, interval);
              } catch (err){}
          }
        }
}

function foo(message){
    try{
  message.channel.send("Bar!");}catch (err){}
}
