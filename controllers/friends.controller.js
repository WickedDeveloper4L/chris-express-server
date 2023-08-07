const model = require("../models/friends.model");
function getFriends(req, res) {
  res.json(model);
}

function getFriend(req, res) {
  const friendId = Number(req.params.friendId);
  const friend = model[friendId];

  if (friend) {
    res.json(friend);
  } else {
    res.status(400).json({
      error: "No friend found",
    });
  }
}

function addFriend(req, res) {
  const newFriend = {
    name: req.body.name,
    id: model.length,
  };

  if (!req.body.name) {
    return res.status(400).json({
      error: "unable to create friend because there's no name value!",
    });
  }

  model.push(newFriend);
  res.json(newFriend);
}

module.exports = {
  getFriends,
  getFriend,
  addFriend,
};
