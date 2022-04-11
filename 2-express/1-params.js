import express from 'express';
const app = express();

app.get('/sky/:id', (req, res, next) => {
  // console.log(req.path);
  // console.log(req.headers);
  console.log(req.params); // /sky/:id로 params를 받아온다. - localhost:8080/sky/ellie 라고 한다면 { id: 'ellie' }가 들어온다. - req.params.id로 접근 가능 - params는 임의로 지정
  console.log(req.params.id);
  console.log(req.query); // localhost:8080/sky/ellie/?keyword=bts 라고 한다면 query로 { keyword: 'bts' }가 들어온다. - req.query.keyword로 접근 가능 - query는 임의로 지정
  console.log(req.query.keyword);

  res.setHeader('key', 'value'); // F12 - Network - Headers에서 보면 key: value로 값이 들어와 있는 것을 볼 수 있다.
  res.sendStatus(201).send('created'); // status code와 내용을 보내줄 수도 있고
  // res.sendStatus(400); // status code만 보내줄 수도 있다.
});
app.listen(8080);
