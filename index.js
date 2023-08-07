const express = require("express");
const friendsController = require("./controllers/friends.controller");
const app = express();

const PORT = 8080;

app.use((req, res, next) => {
  const start = Date.now();

  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Welcome to Chris Express Server!");
});

app.get("/friends", friendsController.getFriends);

app.post("/friends", friendsController.addFriend);
app.get("/friends/:friendId", friendsController.getFriend);
app.listen(PORT, () => {
  console.log(`Listening to chris express server at ${PORT}`);
});
