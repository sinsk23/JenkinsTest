const express = require('express');
const http = require("http");
const app = express();
const PORT = process.env.PORT || 3666;
const HOST = process.env.HOST || 'localhost';


app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello Jenkins!!");
  });

http.createServer(app).listen(PORT,HOST, () => {
    console.log(`서버가  ${HOST}:${PORT}로 켜짐`);
});

module.exports = app;