//same as require("./index.js").html
var html = require("./encoder.js")(require("./html.js"))
console.log(html.decode("&lt;br&gt;"))
console.log(html.encode("<br>"))