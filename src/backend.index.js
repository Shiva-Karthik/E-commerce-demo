const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const connect = require("../../backend/src/configs/db");
const PORT = 8888;
app.listen(PORT, async () => {
    await connect();
    console.log("Listening on port 8888")
});

// https://rocky-harbor-86660.herokuapp.com/ | https://git.heroku.com/rocky-harbor-86660.git