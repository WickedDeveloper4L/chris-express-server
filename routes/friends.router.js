const express = require("express");

const friendsController = require("../controllers/friends.controller");

const friendsRouter = express.Router();

friendsRouter.use((req, res, next) => {
  console.log("IP address:", req.ip);
  next();
});
friendsRouter.get("/", friendsController.getFriends);

friendsRouter.post("/", friendsController.addFriend);
friendsRouter.get("/:friendId", friendsController.getFriend);

module.exports = friendsRouter;
