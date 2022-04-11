const os = require('os'); // 일일이 package.json을 설정해주기 귀찮으니 공부할 때는 require를 사용할 것

console.log(os.EOL === '\n'); // end of line - 줄바꿈 문자
console.log(os.EOL === '\r\n'); // 윈도우 운영체제와 mac 운영체제에서 사용하는 eol이 다르다.
