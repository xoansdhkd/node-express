console.log('logging...');
console.clear(); // 콘솔 지우기

// log level - 서버에 배포했을 때 중요한 warn, error는 로그에 남겨서 서버의 심각한 문제를 발견하고 수정하기 좋다.
console.log('log'); // 개발용
console.info('info'); // 중요한 정보를 남기고 싶을 때
console.warn('warn'); // 발생하면 안되지만 치명적인 에러는 아닌 경고
console.error('error'); // 치명적 에러, 사용자 에러, 시스템 에러

// assert - 앞의 조건이 참이 아닐 때(거짓일 때) 출력 - 특정 조건일 때만 출력하고 싶을 때
console.assert(2 === 3, 'not same!');
console.assert(2 === 2, 'same!');

// print object
const student = { name: 'ellie', age: 20, company: { name: 'AC' } };
console.log(student);
console.table(student);
console.dir(student, { showHidden: true, color: false, depth: 2 }); // depth - 중첩된 오브젝트를 몇 층까지 보여줄지

// measuring time
console.time('for loop');
for (let i = 0; i < 100000; i++) {}
console.timeEnd('for loop');

// counting
function a() {
  console.count('a function');
}
a();
console.countReset('a function');
a();

// trace
function f1() {
  f2();
}
function f2() {
  f3();
}
function f3() {
  console.log('f3');
  console.trace(); // stack trace처럼 어느 함수가 어디에서 호출했는지 볼 수 있다.
}
