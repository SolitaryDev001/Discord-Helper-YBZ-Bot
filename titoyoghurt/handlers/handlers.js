module.exports = {
        onJoin(member) {
                console.log("Entro " + member.user.tag);
        },
        onLeave(member) {
                console.log("Salio " + member.user.tag);
        }
}
