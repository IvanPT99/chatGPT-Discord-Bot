# ChatGPT Discord Bot

![Discord Bot](https://img.shields.io/badge/Discord-Bot-blue?style=flat-square&logo=discord) ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white) ![OpenAI](https://img.shields.io/badge/OpenAI-4B8BBE?style=flat-square&logo=openai&logoColor=white)

## Description

This is a Discord bot that uses the OpenAI API to interact with users on a Discord server. The bot allows users to make inquiries via commands and responds with AI-generated answers, providing an engaging and interactive experience.

## Features

- **AI Interaction:** Responses generated from user queries.
- **Access Control:** Restricted to users with a specific role to prevent unauthorized usage.
- **Customizable Commands:** Facilitates the customization of commands and responses according to needs.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18.13.0).
- [npm](https://www.npmjs.com/) (version 8.19.3).
- A Discord bot token.
- An OpenAI API key.

### Installation Steps

1. **Clone this repository:**

   git clone https://github.com/YOUR_USERNAME/ChatGPT_Discord_Bot.git

2. **Navigate to the project folder:**

    cd ChatGPT_Discord_Bot

3. **Install dependencies:**
    npm install

4. **Modify the .env file in the root of the project:**

    Add your API credentials, your discord BOT token and the ID of the Discord Role that will use the BOT.

5. **Start the bot:**

    node index.js

## Usage 

Once the bot is online, you can use commands in your Discord server to interact with it. Ensure that users have the necessary role to access the bot's functions.

### Example Command

    /c [your question here]

The bot will respond with information based on the provided query.

### Notes

- Remember to replace credentials and any other personal information with the correct details in the .env file.
- Bot is currently on Test.