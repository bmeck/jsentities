module.exports = {
	encoder: require("encoder"),
	htmllegacy: require("./encoder.js")(require("./htmllegacy.js")),
	html: require("./encoder.js")(require("./htmllegacy.js")),
	xml: require("./encoder.js")(require("./xml.js"))
}