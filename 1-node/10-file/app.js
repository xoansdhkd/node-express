const fs = require('fs');

// 모든 API는 3가지 형태로 제공
// rename(..., callback(error, data))
// try { renameSync(...) } catch(e) { } - 동기적으로 동작 - 끝날 때까지 다음으로 넘어가지 않음 - 웬만하면 사용하지 않는게 좋다.
// promise.rename().then().catch(0)

try {
  fs.renameSync('./10-file/text.txt', './10-file/text-new.txt');
} catch (error) {
  console.error(error);
}

fs.rename('./10-file/text-new.txt', './10-file/text.txt', (error) => {
  // 파일이 다 변경되면 callback 실행인데 rename은 error가 발생하면 해당 error를 인자로 넘겨주는 구조 - br.readLine의 IOException 같은 이런 에러를 인자로 넘겨주나봄
  // 에러가 발생하지 않으면 null이다.
  console.log(error);
});

fs.promises
  .rename('./10-file/text2.txt', './10-file/text2-new.txt')
  .then(() => console.log('Done!'))
  .catch(console.error); // 자바스크립트 문법 - 보내주는 인자와 return이 같으면 생략 가능 - (error) => console.error(error)와 동일
