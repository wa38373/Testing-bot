const {Client,IntentsBitfield} = require('discord.js')
const Client = new Client ({ intents :[
      IntentsBitfield.Flags.GuildMembers,
      IntentsBitfield.Flags.MessageContent,
      IntentsBitfield.Flags.Guilds,
      IntentsBitfield.Flags.GuildMessage,
      IntentsBitfield.Flags.GuildVoiceStates,

] ,   
});
client.config = require('./config.json')
client.once('ready',()=>{
      console.log('ready!');
})
client.login(client.config.json.token)

