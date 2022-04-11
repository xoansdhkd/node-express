import express from 'express';
const app = express();

app.use(express.json()); // express에서 제공하는 express.json을 사용하면 body에 들어온 json을 자동으로 parsing 해서 보여준다.

app.post('/', (req, res, next) => {
  console.log(req.body); // test - postman으로 post를 http://localhost:8080으로 body에 json 데이터를 post 해준다. - 근데 그냥 log 찍으면 undefine 나옴 - 위에처럼 express.json() 해줘야 지금처럼 정상으로 나옴
});

app.listen(8080);
