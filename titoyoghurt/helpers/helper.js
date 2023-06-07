const prefix = require( "./information.js").PREFIX;
const icon = "%your icon link%";
//example const icon = "http://yoghurtballz.com/files/images/icon.png";

function getPrefix() {
	return prefix;
}

module.exports = {
	log(msg) {
		var date = new Date();
		var hour = date.getHours();
		var minutes = date.getMinutes();
		var seconds = date.getSeconds();
		console.log(`[${hour}:${minutes}:${seconds}]  ${getPrefix()}  ${msg}`);
	}
}
