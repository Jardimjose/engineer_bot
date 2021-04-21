require("dotenv").config();
const fs = require('fs');
const Discord = require('discord.js');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
	if (!message.content.startsWith(process.env.PREFIX) || message.author.bot) return;
	const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
	console.log(command)
	if (command === 'setup') {
		client.commands.get('setup').execute(message, args);
	} else if (command === 'help') {
		client.commands.get('setup help').execute(message, args);
	}
});

client.login(process.env.TOKEN)






