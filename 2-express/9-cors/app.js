import express from 'express';
import cors from 'cors';

const app = express();

/**
 * 이게 그 유명한 CORS - ip 다르면 데이터 접근 못하게 하는거 - 그래서 헤더에 접근 가능하도록 해줘야 한다.
 * 근데 언제 맨날 아래처럼 Access-Control-Allow-Origin, Access-Control-Allow-Methods 치고 있냐
 * 그래서 사용하는게 두둥탁
 *
 * yarn add cors
 * import cors from 'cors';
 *
 * 키야..
 */

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
//   res.setHeader(
//     'Access-Control-Allow-Methods',
//     'OPTIONS, GET, POST, PUT DELETE'
//   );
//   next();
// });

app.use(cors()); // 근데 이렇게 하면 모든 애들한테 데이터 다 보여주는거
app.use(
  cors({
    origin: ['http://127.0.0.1:5500'], // 그래서 이렇게 옵션으로 origin을 주면 이 주소에서 접근 가능하고 나머지는 안 되게 막는다.
    optionsSuccessStatus: 200, // 이건 별로 안 중요한데 성공하면 자동으로 200으로 응답
    credentials: true, // 헤더에 토큰이나 사용자 정보 추가 허용 - 헤더에 Access-Control-Allow-Credentials 추가한거랑 똑같음
  })
);

app.get('/', (req, res, next) => {
  res.send('Welcome!');
});

app.listen(8080);
