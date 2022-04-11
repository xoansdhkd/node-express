const fs = require('fs'); // 아래 코드와 관련은 없지만 자바스크립트 런타임에도 global이 있고 node에도 global이 있어서 지금 사용하는 것이 노드임을 알려주기 위해 임의의 노드 라이브러리를 가져옴

// global
console.log(global); // node에서 global은 정말 이름이 global인 전역 객체이다. - 자바스크립트 런타임에서 global은 window이다.

global.hello = () => {
  console.log('hello');
};

global.hello(); // global은 생략 가능
hello();

global.console.log('hello');
