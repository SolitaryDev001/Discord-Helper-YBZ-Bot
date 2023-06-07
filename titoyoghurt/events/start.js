const version = require("../helpers/information").VERSION;
const log = require("../helpers/helper.js").log;

function getVersion() {
	return version;
}

module.exports ={
	onStart(client) {
		log(`Iniciando BOT ${getVersion()}`);
		setBotActualStatus(client);
	}
}

function setBotActualStatus(client) {
	setBotStatus(client, "dnd", `%your bot status%: ${minutes}`, "PLAYING");

	setTimeout(() => {
		setBotActualStatus(client);
	}, 20000);

function setBotStatus(client, status, text, type) {
	client.user.setPresence({
		status: status,
		activity: {
			name: text,
			type: type
		}
	});
}
