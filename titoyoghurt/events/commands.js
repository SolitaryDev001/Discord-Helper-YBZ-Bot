const Discord = require("discord.js");
const log = require("../helpers/helper").log;
const name = require("../helpers/information.js").NAME;
const version = require("../helpers/information.js").VERSION;
const space = "~~-----------------------------------------------~~";
const link = "%your icon link%";
//example const link = "http://yoghurtballz.com/files/downloads/installer.jar";

const icon = "%your icon link%";
//example const icon = "http://yoghurtballz.com/files/images/icon.png";

function getName() {
	return name;
}

function getVersion() {
	return version;
}

module.exports = {
	onMessage(msg) {
		if (msg.author.bot)
			return;
	
		if (msg.content == null)
			return;
	
		if (!(isCommand(msg)) || !(isValidCMD(msg)))
			return;
	
		if (!(isBotCMD(msg))) 
			return;
		
		SendBotInformation(msg);
	}
}

function ReplyMessageTemporal(msg, text) {
	msg.reply(text).
		then(msg => msg.delete({ timeout: 32000 })).
		catch(() => log("Invalid message"));
	msg.delete();
}

function SendBotInformation(msg) {
	ReplyMessageTemporal(msg, new Discord.MessageEmbed()
		.setTitle(`__Informacion__ ~~--~~ __Information__`)
		.setAuthor("SolitaryDev", icon)
		.setDescription(`**(Español - Spanish)** ${msg.author}\nProgramador: **SolitaryDev#2292**\nNombre: **${getName()}**\nVersion del Bot: **${getVersion()}**\nComandos:\n- **!mods**\n- **!ip**\n- **!bot**\n \n**(Ingles - English)** ${msg.author}\nDeveloper: **SolitaryDev#2292\n**Name: **${getName()}\n**Bot version: **${getVersion()}**\nCommands:\n- **!mods**\n- **!ip**\n- **!bot**\n${space}\n${space}`)
		.setColor('#0099ff')
		.addFields(
			{ name: '__(Español - Spanish)__ Sugerencia', value: 'Recuerda usar el canal de comandos' },
			{ name: '__(Ingles - English)__ Suggestion', value: 'Remember to use the command`s channel' },
		));
}

function isBotCMD(msg) {
	return msg.content.startsWith('!bot');
}

function isValidCMD(msg) {
	return msg.content.startsWith('!bot');
}

function isCommandChannel(msg) {
	return msg.channel.id == %your channel id%;
}

function isCommand(msg) {
	return msg.content.startsWith('!');
}
