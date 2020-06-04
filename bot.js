console.log('Test1');           // Sequential logging for every important dependence.
console.log('Test2');
console.log('Test3');
const config = require('./config.json');
console.log('config.JSON file ready');
console.log('Waiting...');
const Discord = require('discord.js');
const client = new Discord.Client();
console.log('Discord variables on!');
console.log('Online!'); //End of startup logging

client.on("message", function (message) {
  if (message.author.equals(client.user)) return; // Ignores itself
  if (message.channel.type === 'dm') return message.reply("I'm not authorized to answer dm's. Please use the public chat."); // Ignores dms
});
client.on("guildMemberAdd", (member) => {       //New members welcome message
   console.log(`User: ${member.user.username} has joined ${member.guild.name}`);
   var canal = client.channels.get("X"); //Replace the X (not the quotes) with the Welcome channel on your server.
   var welcomeMessage = new Discord.RichEmbed()
                        .setTitle("Welcome, "+ member.user.username + "!")
                        .setDescription("Please **read the rules**")
                        .setColor(0xffffff)
                        .setImage("https://discord.com/assets/2c21aeda16de354ba5334551a883b481.png")
                        .setThumbnail(member.user.displayAvatarURL)
                        .setFooter("This is our little secret... I'm not a human ;)", "https://discord.com/assets/2c21aeda16de354ba5334551a883b481.png"); 
     /* This is the embed message from welcome. You can customize this variables.
    .setTitle stands for te title (obviusly)
    .setDescriptions sets the text bellow the title, aka "Description"
    .setColor defines the lateral color of the message. 0x equals # for hex notations. ex: google "white color hex" and you should get the color I used.
    .setThumbnail defines the little pic you got one side of your message. You can replace my content (the profile pic of the new member) with a url, ex: ("https://discord.com/assets/2c21aeda16de354ba5334551a883b481.png"), to set you fav pic as welcome thumbnail.
    .setImage manages the same way .setThumbnail, but for a bigger pic.
    .setFooter puts text in the bottom of the embed message. Before the "," you put text, and after, a pic.
    No field is mandatory.

     */
   canal.send(welcomeMessage);
});

client.on("message", function (message) {
if (message.content === 'hello') {      //The bot will react to "hello" with an emoji. Unicode emojis are easier to add, but not mandatory.
	message.react("😎");}
});
client.on("message", function (message) {
if (message.content === 'good bye') {
	message.react("😽");}
});
client.on("message", function (message) {
if (message.content === "on a mote of dust, suspended in a sunbeam") {
	message.react("⭐");
	message.react("🌌");
	message.react("☀");
}});

const botStateArray = [
    "the piano", 
    "chess!",
    "with my cat :3", 
    "with the human society destiny"
    ]; // this array contains the former "activity" info of the bot. As it starts, by default, as "playing (your state)", I usually use this word as part of the state message. Ex: Playing the piano; playing chess!, etc.

client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (botStateArray.length - 1) + 1); // Generates a number between 1 and the botStateArray length.
        client.user.setActivity(botStateArray[index]); // defines bot's activity as a product between the random number and the array itself
    }, 10000); // time between state changes in miliseconds.
});

//  COMMAND SECTION
client.on("message", message => {
  if (message.author.bot) return; // Don't receive orders from other bots. Important good practice on Discordjs
  if (message.channel.type === 'dm') return; // don't receive commands by dm's. 
    if (!message.content.startsWith(config.prefix)){// Does the command start with the prefix declared in config.JSON?

    }else{//user IS typing a command
    //splits input to commands
      let command = message.content.split(' ')[0];
      command = command.slice(config.prefix.length);  
      try {
        let commandFile = require(`./commands/${command}.js`);
        commandFile.run(client, message, Discord);
      } catch (err) {
        console.log(err);
        client.users.get(config.ownerID).send(`${err}`); //Dm's you the error info. You can delete this if you want, but is always useful have an error log.
        return;
      }
    }
  }
);
client.login(config.token); //discord token allows the bot to connect Discord API and intereact with the platform. NEVER PUBLISH OR SHARE IT. You can always enter you discord dev account and reset the token.