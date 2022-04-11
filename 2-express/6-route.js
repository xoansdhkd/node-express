import express from 'express';
import postRouter from './router/post.js';
import userRouter from './router/user.js';
const app = express();

app.use(express.json());

app.use('/posts', postRouter); // 상위 루트는 여기서 지정
app.use('/users', userRouter); // 이렇게 보면 큰 도메인이 /posts와 /users가 있구나를 한 번에 알 수 있다.

app.use((error, req, res, next) => {
  // 에러 핸들러
  console.error(error);
});
app.listen(8080);
