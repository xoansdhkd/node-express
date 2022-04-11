import express from 'express';
import fs from 'fs';
import fsAsync from 'fs/promises';
import {} from 'express-async-error';

/**
 * express 5 이후부터 비동기도 알아서 error가 next로 전달되게 바뀔 예정
 *
 * 하지만 지금은 안되니까 이거라도 쓰자 - 어디서 에러가 났는지 정확하게 알 수 없어도 일일이 catch 귀찮잖아 - 근데 필요한 곳에선 catch해서 처리하는게 좋음
 *
 * yarn add express-async-error
 * import {} from 'express-async-error';
 *
 * 미들웨어에서 프로미스를 리턴하는 경우에만 알아서 넘겨서 처리
 */

const app = express();
app.use(express.json());

app.get('/file1', (req, res) => {});

app.get('/file2', (req, res, next) => {
  // fsAsync.readFile('/file.txt'); // 원본
  return fsAsync.readFile('/file.txt'); // 이거처럼 프로미스를 리턴할 때만 알아서 처리해줌
});

app.get('/file3', async (req, res) => {
  const data = await fsAsync.readFile('/file.txt'); // 얜 애초에 프로미스로 감싸져 있어서 걍 놔두면 됨
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ message: 'Something went wrong' });
});
app.listen(8080);
