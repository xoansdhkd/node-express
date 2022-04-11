const fs = require('fs');

const beforeMem = process.memoryUsage().rss;
fs.readFile('./12-stream/file.txt', (_, data) => {
  fs.writeFile('./12-stream/file2.txt', data, () => {}); // 지금 방식은 모든 파일을 다 읽어온 후에 다시 파일을 써주는 것 - 비효율적
  // calculate
  const afterMem = process.memoryUsage().rss;
  const diff = afterMem - beforeMem;
  const consumed = diff / 1024 / 1024;
  console.log(diff);
  console.log(`Consumed Memory: ${consumed}MB`);
});

const data = [];
const readStream = fs
  .createReadStream('./12-stream/file.txt', {
    // highWaterMark: 8, // 한 번에 처리할 크기를 정함 - 버퍼 사이즈 - default는 64kbytes
    // encoding: 'utf-8',
  })
  .on('data', (chunk) => {
    // on에 이미 지정되어 있는 event들이 있다. - data는 데이터가 오면
    // console.log(chunk);
    data.push(chunk);
    console.count('data');
  })
  .on('end', () => {
    console.log(data.join(''));
  })
  .on('error', console.error);
