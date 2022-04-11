import express from 'express';
const app = express();

app.all(
  // use와 차이점 - all은 딱 '/api' 경로에 한해서만 모든 req 처리 - get, post, put, delete ...
  // use처럼 쓰려면 /api/* 이렇게 확실하게 지정해줘야 한다.
  ('/api',
  (req, res, next) => {
    console.log('all');
    next();
  })
);

app.use(
  // use는 '/api'만 포함하면? 모든 req 처리 - 예) /api, /api/sdfsdfwe, /api/123 - 전부 다 처리
  ('/api',
  (req, res, next) => {
    console.log('use');
    next();
  })
);

app.get(
  '/',
  (req, res, next) => {
    // 미들웨어 콜백 함수들은 하나의 경로에 대해 배열 형태로 여러 개를 등록할 수 있다. - 순서 중요
    console.log('first');
    if (true) {
      return res.send('Hello'); // 이러면 무조건 에러 - 한 콜백에서 여러 번 res.send 할 수 없다. - 조건이 필요하면 무조건 return res.send로 콜백을 나가줘야 한다.
    }
    res.send('Bye');

    // next(); // next 추가 - first2로 넘어감 - res.send로 요청을 처리하게 되면 next고 뭐고 딱 거기까지만 실행 - 뒤는 실행 안 한다.
    // next('route'); // 'route'하면 next를 하지 않고 다음인 second로 넘어간다.
    next(new Error('error')); // 이렇게 에러도 넘겨줄 수 있다. - 그래서 어떤 앱이든지 마지막에 use로 에러처리를 거의 무조건 해줘야 한다.
  },
  (req, res, next) => {
    // 이런식으로도 가능하고
    console.log('first2');
  }
);

app.get('/', (req, res, next) => {
  // 이렇게도 가능하다. - 하지만 이렇게 해봐도 log로는 first만 찍혀있다. - first에서 res를 해주거나 next로 넘어가야 되는데 아무거도 하지 않아서 멈춰 있다. - 그래서 순서 중요
  console.log('second');
});

app.use((req, res, next) => {
  // 에러 핸들러 바로 위인 여기까지 온거면 아무도 처리 안 한거다.
  res.status(404).send('Not available!@_@');
});
app.use((error, req, res, next) => {
  // 에러 핸들러
  console.error(error);
  res.status(500).send('Sorry, try later!');
});
app.listen(8080);
