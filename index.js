const Discord = require("discord.js");
const client = new Discord.Client();

require("dotenv").config();

const setups = require("./setups");

client.login(process.env.TOKEN)

client.on("ready", () =>{
    console.log(`${client.user.tag} is ready`)
})

client.on("message", msg => {
    if(msg.content === "!setup australia dry"){
        msg.channel.send(setups.dry.australia.aerodynamics)
        msg.channel.send("**Transmission**")
        msg.channel.send(setups.dry.australia.transmission)
        msg.channel.send("**Suspension Geometry**")
        msg.channel.send(setups.dry.australia.suspensionGeometry)
        msg.channel.send("**Suspension**")
        msg.channel.send(setups.dry.australia.suspension)
        msg.channel.send(setups.dry.australia.brakes)
        msg.channel.send(setups.dry.australia.tyrePressure)
    }
})

const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#FF0000')
	.setTitle('Australia')
	.setURL('https://discord.js.org/')
	//.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
	.setDescription('A f1 2020 setup for the Australian GP')
	.setThumbnail('https://images-ext-1.discordapp.net/external/cFCPgI7k783vd4pRzTYzYMf5_U4fdD1EasJKxKVmnN8/https/www.designtagebuch.de/wp-content/uploads/mediathek//2017/11/f1-logo-red-on-black-e1511528736760-700x438.png')
	.addFields(
		{ name: 'Aerodynamics', value: setups.dry.australia.aerodynamics },
		//{ name: '\u200B', value: '\u200B' },
		{ name: 'Transmission', value: setups.dry.australia.transmission},
		{ name: 'Suspension Geometry', value: setups.dry.australia.suspensionGeometry, inline: true },
	)
	//.addField('Inline field title', 'Some value here', true)
	.setTimestamp()
	

    client.on("message", msg => {
        if(msg.content === "ello mate"){
            msg.channel.send(exampleEmbed)
        }
    })