const express = require('express');
const http = require("http");
const app = express();
const PORT = process.env.PORT || 3666;
// const HOST = process.env.HOST || 'localhost';
const cors = require('cors');
   
app.use(
    cors({
      origin: true, // 출처 허용 옵션
      withCredentials: true, // 사용자 인증이 필요한 리소스(쿠키 ..등) 접근
    })
  );
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', './views');

app.get("/", (req, res) => {
    res.send("Hello Jenkins!!");
    
  });

app.get("/api",(req,res)=> {
  res.render('index',{
  title: 'Hi Node Web Server!!'
});
});

http.createServer(app).listen(PORT, () => {
    console.log(`서버가  :${PORT}로 켜짐`);
});
// http.createServer(app).listen(PORT,HOST, () => {
//   console.log(`서버가  ${HOST}:${PORT}로 켜짐`);
// });

module.exports = app;