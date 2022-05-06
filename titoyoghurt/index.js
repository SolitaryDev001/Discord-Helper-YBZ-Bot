const http = require("http");
const { Client, Intents } = require("discord.js");
const INFO = require("./utils/information.js");
const COMMAND = require("./commands/command.js");
const HANDLER = require("./handlers/handler.js");
const PREFIX = INFO.PREFIX;
const TOKEN = INFO.TOKEN;
http.createServer((_, res) => res.end(`${PREFIX} Bot Online`)).listen(8080)

const client = new Client({
        intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

console.log(`${PREFIX} Loading Bot...`);

client.on("ready", () => {
        console.log(`${PREFIX} Bot Successfully Started`);
        client.user.setActivity("Jugando YoghurtBallZ");
});

client.on("messageCreate", (msg) => {
        COMMAND.commands(msg);
});

client.on("guildMemberAdd", (member) => {
        HANDLER.onJoin(member);
});

client.on("guildMemberRemove", (member) => {
        HANDLER.onLeave(member);
});

client.login(TOKEN);
