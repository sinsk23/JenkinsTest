const express = require('express');
const http = require("http");
const app = express();
const PORT = process.env.PORT || 3666;
const HOST = process.env.HOST || 'localhost';


app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', './views');

app.get("/", (req, res) => {
    // res.send("Hello Jenkins!!");
    res.render('index',{
      title: 'Hi Node Web Server!'
    });
  });

http.createServer(app).listen(PORT,HOST, () => {
    console.log(`서버가  ${HOST}:${PORT} 켜짐`);
});

module.exports = app;