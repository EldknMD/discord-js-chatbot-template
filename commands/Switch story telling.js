exports.run = (client, message, Discord) => {

Message.channel.send("Hello!") //Initial message
.then(() => {
    message.channel.awaitMessages(response => response.content, {
      max: 1,
      time: 10000, // Await time in miliseconds
      errors: ['time'],
    })
  
    .then((collected) => {
      switch (collected.first().content) { // switch function gives different options using your answer as input
        case "Hello, bot!": //If you say this 
        message.channel.send(`You're so polite, human`); // this message will be sent
        break;
    
        case "(silence)":
        message.channel.send(`Oh... you're busy...`); // you can ass more "case"s if you want.
        break;

        default:
        message.channel.send(`I can't understand you, human`); // default is the answer to bas typing or unknown words
      }})
      .catch(() => {
        message.channel.send("Take your time... I'll be here"); //catch is the answer to bot time counter.
      });
  });
};