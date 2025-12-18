import { Client, Events, GatewayIntentBits } from 'discord.js';



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

client.login(
"MTQ1MTEyMTQzMDg3NDk1MTc1MA.GjTkAq.ldrFYdtjezN6YeHfBVfcU4d9TKkSKmICb_k-q0"
);