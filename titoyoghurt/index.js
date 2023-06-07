const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
	require("./events/start.js").onStart(client);
});

client.on('message', (msg) => {
	require("./events/chat.js").onMessage(msg);
	require("./events/commands.js").onMessage(msg);
});

client.login(require("./helpers/information.js").TOKEN);
