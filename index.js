const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');

});

client.login('process.env.BOT_TOKEN');

client.on('message', message => {
    if (message.content === "&pingdino")
    {
        var dino = client.users.cache.find(u => u.tag === 'CURRY IN A HURRY!!!#9290').id;
        message.channel.send(dino);
    }
}
);
