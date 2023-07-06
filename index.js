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

app.get("/", (req, res) => {
  res.send("Welcome to Chris Express Server!");
});

app.get("/friends", (req, res) => {
  res.json(friends);
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
