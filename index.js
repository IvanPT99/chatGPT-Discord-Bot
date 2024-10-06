require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const OpenAI = require('openai');

const RoleId = process.env.ROLE_ID;

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

client.once('ready', () => {
    console.log('Bot is online!');
});

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;

    const hasRole = message.member.roles.cache.some(role => role.id === RoleId);
    if (!hasRole) {
        message.reply('You dont have permission to use this BOT.');
        return;
    }

    if (message.content.startsWith('/c')) {
        const userPrompt = message.content.slice(2).trim();

        if (!userPrompt) {
            message.reply('Please, type your consult after /c.');
            return;
        }

        try {
            // SEND TO OPENAI API
            const response = await openai.chat.completions.create({
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: userPrompt }]
            });

            // RESPONSE 
            const botResponse = response.choices[0].message.content.trim();
            message.reply(botResponse);
        } catch (error) {
            console.error('Error with OpenAI API:', error);
            message.reply('An error occurred while processing your request.');
        }
    }
});

// INITIATE
client.login(process.env.DISCORD_TOKEN);
