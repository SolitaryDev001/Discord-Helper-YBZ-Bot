const Discord = require("discord.js");
const log = require("../helpers/helper.js").log;
const space = "~~-------------------------------------------~~";
const icon = "%your icon link%";
//example const icon = "http://yoghurtballz.com/files/images/icon.png";

module.exports = {
	onMessage(msg) {
		if (msg.author.bot)
			return;

		if (msg.content == null)
			return;

		if (isCommand(msg))
			return;

		if (!(isBlockedMessage(msg)))
			return;

		SendWarningMessageBlocked(msg);
	}
}

function ReplyMessageTemporal(msg, text) {
	msg.reply(text).
		then(msg => msg.delete({ timeout: 32000 })).
		catch(() => log("Invalid message"));
	msg.delete();
}

function SendWarningMessageBlocked(msg) {
	ReplyMessageTemporal(msg, new Discord.MessageEmbed()
		.setTitle(`__Advertencia__ ~~--~~ __Warning__`)
		.setAuthor("SolitaryDev", icon)
		.setDescription(`**(Español - Spanish)**\n${msg.author} No es necesario mencionar a tantas personas\n **(Ingles - English)**\n${msg.author} No need to mention so many people\n${space}\n${space}`
		)
		.setColor('#0099ff')
		.addFields(
			{ name: '__(Español - Spanish)__ Sugerencia', value: 'Recuerda Preguntar cualquier duda al Staff' },
			{ name: '__(Ingles - English)__ Suggestion', value: 'Remember to ask any questions to the Staff' },
		));
}

function isBlockedMessage(msg) {
	return msg.content.startsWith("@everyone") || msg.content.startsWith("@here");
}

function isCommand(msg) {
	return msg.content.startsWith("!");
}
