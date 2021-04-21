const { MessageEmbed } = require("discord.js");


module.exports = {

    name: 'help',
    description: 'help on how to use the bot',
    execute(message, args) {

        let _ = new MessageEmbed();
        _.setColor('#F71D00');
        _.setTitle("Hi! I'm Jeff and I'll be your retarded engineer");
        _.setDescription("You can always refer back to me whenever you need help. but fuck Alexa")
        _.addField()
        message.channel.send(_);
    }

    
};