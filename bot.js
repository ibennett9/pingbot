const Discord = require('discord.js');
const client = new Discord.Client();
const prefix="&";

client.on('ready', () => {

    console.log('I am ready!');

});

 
client.on('message', message => {
    if (!message.startsWith(prefix)) message.channel.send('Loser');
    if (message.startsWith(prefix + "pingdino"))
    {
        var dino = client.users.cache.find(u => u.tag === 'CURRY IN A HURRY!!!#9290').id;
        message.channel.send(dino);
    }
    else if (message.startsWith(prefix) + "ping")
    {
        message.reply(" pong!");
    }

});

client.login(process.env.BOT_TOKEN);