const fs = require('fs').promises;

// read a file
fs.readFile('./10-file/text.txt', 'utf-8')
  .then(console.log)
  .catch(console.error);

// wrtiting a file
fs.writeFile('./10-file/file.txt', 'Hello, Dream Coders! :) ') //
  .catch(console.error);

fs.appendFile('./10-file/file.txt', 'Yo, Dream Coders! :) ') // 이어서 쓰려면 appendFile
  .catch(console.error);

// copy
fs.copyFile('./10-file/file.txt', './10-file/file2.txt') // 순서가 보장되지 않는다. - 비동기 처리라서 위에 내용이 append 되기도 전에 복사할 수도 있다.
  .catch(console.error); // 순서를 보장받고 싶다면 appendFile에 then을 이용하면 된다.

// folder
fs.mkdir('./10-file/sub-folder') //
  .catch(console.error);

// 디렉토리에 있는 모든 파일 읽어오기
fs.readdir('./10-file') //
  .then(console.log) //
  .catch(console.error);
