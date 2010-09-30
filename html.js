var html = module.exports = Object.create(require("./htmllegacy.js"))
html.entities = html.entities.concat().filter(function(pair){
	return pair[0].slice(-1) === ";"
})