const Discord = require('discord.js');
const bot = new Discord.Client();

//bot.login('NDMwODkzNTQ4MDc5MDIyMDgx.DbBl1w.7gnjeiHAcsXv3JsY_dwLyLX_Kjc');

bot.on('message', message => {
    if(message.content.startsWith('ping')){
        message.channel.send('pong');
    }
    if(message.content.startsWith('bang')){
        message.channel.send('usuario morreu de novo pro ratel!');
    }
    if(message.content.startsWith('beng')){
        message.channel.send('CORRE NEGADA O ratel ainda tá vivo!');
    }
    if(message.content.startsWith('ganhei')){
      message.channel.send('parabéns, seu merda!');
    }
});

bot.on('message', message => {
  if(message.content.startsWith('!news')){
      message.channel.send('https://newsapi.org/v2/everything?q=far%20cry&language=pt&sortBy=publishedAt&apiKey=f925e1a93a62459e8edf10242930e0a8');
  }
});

bot.login(process.env.BOT_TOKEN);
