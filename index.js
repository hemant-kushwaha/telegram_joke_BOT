const TelegramBot = require("node-telegram-bot-api");//load
const axios = require("axios");
const dotenv = require('dotenv'); 
dotenv.config();//node 20+v -->node --env-file .env index.js

// console.log(process.env.TELEGRAM_TOKEN);



const bot = new TelegramBot(process.env.TELEGRAM_TOKEN,{polling:true});

bot.onText(/\/start/,(Option)=>{//message is event.Message object(option)
    console.log("Message Revieved On Bot" , Option);

    bot.sendMessage(Option.chat.id,"Hello , I am a bot made by Hemant.\n type /joke to hear jokes")
});

bot.onText(/\/joke/,async (Option) =>{
const response = await axios.get('https://v2.jokeapi.dev/joke/Programming');

console.log(response);

const setup = response.data.joke;
// const punchline = response.data.delivery;

bot.sendMessage(Option.chat.id,setup);


});
