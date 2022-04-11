import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';

/**
 * 유용한 외부 미들웨어
 *
 * yarn add cookie-parser
 * yarn add morgan
 * yarn add helmet
 */

const app = express();

const corsOptions = {
  origin: ['http://127.0.0.1:5500'],
  optionsSuccessStatus: 200,
  credentials: true,
};

app.use(express.json()); // req body 보여주는 애
app.use(cookieParser()); // req 쿠키 보여주는 애 - postman으로 Cookie 보내주는데 yummu_cookie=choco; tasty_cookie=strawberry 이렇게 보내면 { yummu_cookie: 'choco', tasty_cookie: 'strawberry' } 이렇게 나옴
app.use(morgan('combined')); // 사용자에게 요청을 받을 때마다 자동으로 로그로 남겨줌 - 어떤 형태로 로그를 남길건지 옵션을 줄 수 있다. - 보통 combined?
app.use(helmet()); // 공통적으로 보안에 필요한 헤더들이 자동으로 추가된다. - 헤더 맨 아래 'X- '로 시작 것들
app.use(cors(corsOptions)); // CORS 쉽게 해주는 애

app.get('/', (req, res, next) => {
  console.log(req.body); // req의 body를 보고 싶으면 app.use(express.json())을 해줘야 한다.
  console.log(req.cookies); // 똑같이 cookies가 보고 싶으면 app.use(cookieParser())을 해줘야 한다. - 없으면 undefined로 나옴
  // res.cookies.yummy_cookie; // 이런식으로 접근 가능
  res.send('Welcome!');
});

app.listen(8080);
