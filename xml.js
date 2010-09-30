var xml = module.exports = Object.create(require("./htmllegacy.js"))
xml.entities = [
	["&amp;" , "\u0026"]
	,["&lt;" , "\u003C"]
	,["&gt;" , "\u003E"]
	,["&quot;" , "\u0022"]
	,["&apos;" , "\u0027"]
]