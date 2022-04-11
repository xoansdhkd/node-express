import express from 'express';
import fs from 'fs';
import fsAsync from 'fs/promises';

const app = express();
app.use(express.json());

app.get('/file1', (req, res) => {
  try {
    const data = fs.readFileSync('/file.txt'); // 동기로 파일 읽어오기 - 파일 없으면 에러 발생 - 마지막의 app.use로 이동 - 어디서 에러가 났는지 모르게 된다. - try-catch 가능
  } catch (error) {
    res.status(404).send('File not found');
  }

  fs.readFile('/file1.txt', (err, data) => {
    // 비동기로 파일 읽어오기 - 에러 내용이 err 콜백 함수 인자로 전달되기 때문에 내부적으로 동작하여 app.use에 안걸린다. - 외부에서 알 수 없음 - try-catch 해도 안 잡힌다.
    if (err) {
      res.status(404).send('File not found'); // 그래서 내부적으로 처리해줘야 한다.
    }
  });
});

app.get('/file2', (req, res, next) => {
  fsAsync // 프로미스는 비동기지만 동기처럼 동작시킬 수 있다.
    .readFile('/file.txt')
    .then((data) => {})
    .catch(next); // 하지만 결국 비동기이기 때문에 얘도 내부적으로 동작해서 error에 대해서 app.use가 알 수 없다. - 마찬가지로 try-catch 해도 안 잡힌다.
  // 자바스크립트 문법 - 전달받은 인자와 호출하는 인자가 같으면 생략 가능 - (error) => next(error)와 동일
});

app.get('/file3', async (req, res) => {
  try {
    const data = await fsAsync.readFile('/file.txt'); // 콜백 자체가 프로미스(비동기) - 하지만 await하고 있기 때문에 마치 동기처럼 동작한다. - await 자체는 try-catch 가능하지만 외부에선 알 수 없다.
  } catch (error) {
    res.status(404).send('File not found');
  }
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ message: 'Something went wrong' });
});
app.listen(8080);
