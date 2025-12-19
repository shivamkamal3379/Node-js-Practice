import 'dotenv/config';

import { Client, Events, GatewayIntentBits, InteractionCallback } from 'discord.js';



const client = new Client({ intents:
     [GatewayIntentBits.Guilds ,
     GatewayIntentBits.GuildMessages ,
     GatewayIntentBits.MessageContent
    ] });


client.on('messageCreate' , (message) =>{
    if(message.author.bot) return ;
    message.reply(
        {
            content : "Hi from Bot"
        }
    )
    console.log(message);

})

client.on("interactionCreate" , (interaction) =>
{  
      console.log(interaction);
});

client.login(process.env.DISCORD_TOKEN);