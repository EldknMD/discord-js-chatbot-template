exports.run = (client, message, Discord) => {
    var embedtest = new Discord.RichEmbed()
                        .setTitle("Cat's message")
                        .setDescription("We know you're bored... but you can always look at me an see perfection ;)")
                        .setColor(0xffffff)
                        .setImage("https://media.giphy.com/media/OmK8lulOMQ9XO/giphy.gif")
                        .setThumbnail(client.user.displayAvatarURL)
                        
    message.channel.send(embedtest);
}