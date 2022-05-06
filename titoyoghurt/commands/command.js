const author = "solitarydev";
const id_author = "931304389245800468";
var sendAuthorMSG = false;

module.exports = {
        commands(msg) {
                if (msg.author == id_author) {
                        if (!(sendAuthorMSG))
                                console.log("Escribio mi Amo, asi que ignorare sus cagadas");

                        sendAuthorMSG = true;
                        return;
                }

                if (msg.author.bot)
                        return;

                var blockedmsg = msg.content.includes("@everyone") || msg.content.includes("@here") || msg.content.includes(`<@${id_author}>`);
                if (blockedmsg)
                        msg.delete(0);

                if (msg.content.toLowerCase().includes(author)) {
                        msg.delete(0);
                        msg.author.send('c:< asi que hablar con mi dueño').catch(() => msg.reply("No te Puedo Enviar un Mensaje por DM, pero ten Cuidado con mi creador"));
                }
        }
}
