const counter = require('./counter.js'); // 노드에서 제공하는 import - 동일하게 자바스크립트에서 export, import를 제공하지 않았던 시절 자체적으로 만든 노드 문법

console.log(count);
console.log(getCount()); // 에러 - 카운트가 정의 되어 있지 않습니다. - export, import가 되지 않았기 때문
