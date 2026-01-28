const express = require("express");
const cors = require("cors");
const crypto = require("crypto");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const users = [
  {
    id: "1",
    username: "juninho",
    email: "juninho@gmail.com",
    password: "123456",
  },
];

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Please enter both username and password" });
  }

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ error: "Invalid username or password" });
  }

  const apiKey = crypto.randomBytes(16).toString("hex");

  res.json({
    id: user.id,
    username: user.username,
    email: user.email,
    apiKey,
  });
});

app.post("/register", (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res
      .status(400)
      .json({ error: "Please enter username, email and password" });
  }

  const user = users.push({
    id: (users.length + 1).toString(),
    username,
    email,
    password,
  });

  const apiKey = crypto.randomBytes(16).toString("hex");

  res.json({
    id: user.id,
    username: user.username,
    email: user.email,
    apiKey,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
