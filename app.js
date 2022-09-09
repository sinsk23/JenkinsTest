const express = require('express');
const http = require("http");
const app = express();
const port = 3666;


app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello Jenkins!");
  });

http.createServer(app).listen(port, () => {
    console.log(port, "포트로 서버가 열렸어요!");
});

module.exports = app;