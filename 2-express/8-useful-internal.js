import express from 'express';

const app = express();

app.use(express.json()); // REST API, Body를 parsing 할 때 사용하는 유용한 내부 미들웨어
app.use(express.urlencoded({ extended: false })); // HTML에서 Form에서 submit하면 자동으로 request 발생하는데 form data를 body 안으로 자동으로 parsing 해주는 것 - 서버 사이드 렌더링에 유용

const options = {
  dotfiles: 'ignore',
  etag: false,
  index: false,
  maxAge: '1d', // 캐시 얼마나 오래 보관할지
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now());
  },
};
app.use(express.static('public', options)); // 지정한 디렉토리(여기선 public)의 리소스를 사용자가 접근할 수 있게 함 - 옵션도 디게 많음
// app.use(express.static('public')); // 물론 안 적어도 됨

// express.static을 안 쓰면
// app.get('/index.html', (req, res, next) => {
//   // 이런식으로 작성해서 파일을 res로 읽어와야 한다.
// })
app.listen(8080);
