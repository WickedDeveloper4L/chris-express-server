const express = require("express");

const app = express();

const PORT = 8080;

const friends = [
  {
    name: "Chris",
    id: "0",
  },
  {
    name: "seyi",
    id: "1",
  },
  {
    name: "kleine",
    id: "2",
  },
];

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

app.get("/friends", (req, res) => {
  res.json(friends);
});

app.post("/friends", (req, res) => {
  const newFriend = {
    name: req.body.name,
    id: friends.length,
  };

  if (!req.body.name) {
    return res.status(400).json({
      error: "unable to create friend because there's no name value!",
    });
  }

  friends.push(newFriend);
  res.json(newFriend);
});
app.get("/friends/:friendId", (req, res) => {
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId];

  if (friend) {
    res.json(friend);
  } else {
    res.status(400).json({
      error: "No friend found",
    });
  }
});
app.listen(PORT, () => {
  console.log(`Listenoing to chris express server at ${PORT}`);
});
