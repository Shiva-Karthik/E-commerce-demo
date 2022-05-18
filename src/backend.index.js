const express = require("express");
const cors = require("cors");
const app = express();
const { register, login } = require("./backend/controllers/auth.controller");
const userController = require("./backend/controllers/users.controller");



app.use(cors());
app.use(express.json());

app.post("/register", register);
// .login
app.post("/login", login);

app.use("/users", userController);

const connect = require("./backend/configs/db");
const PORT = 8888;
app.listen(PORT, async () => {
  await connect();
  console.log("Listening on port 8888");
});

// https://fierce-hollows-91031.herokuapp.com/ | https://git.heroku.com/fierce-hollows-91031.git
