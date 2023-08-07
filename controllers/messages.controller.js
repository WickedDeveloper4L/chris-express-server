const path = require("path");

function getMessage(req, res) {
  res.sendFile(
    path.join(__dirname, "..", "public", "images", "skimountain.jpg")
  );
  //   res.send("<ul><li>Hello Chris!</li></ul>");
}

function postMessage(req, res) {
  console.log("Updating messages...");
}

module.exports = {
  postMessage,
  getMessage,
};
