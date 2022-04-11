const process = require('process'); // global 객체 정의, openStdin() - 소켓을 여는 것, 현재 경로를 출력하는 것 등등을 포함

console.log(process.execPath);
console.log(process.version);
console.log(process.pid);
console.log(process.ppid);
console.log(process.platform);
console.log(process.env);
console.log(process.uptime());
console.log(process.cwd());
console.log(process.cpuUsage()); // 등등 다양한 정보를 포함

setTimeout(() => {
  console.log('setTimeout');
}, 0);

process.nextTick(() => {
  // 현재 수행하는 코드를 수행한 다음에 등록한 callback 함수를 task queue에 올려줘라
  // 현재 task queue에 setTimeout이 이미 들어가 있지만 이것을 무시하고 최우선으로 처리한다.
  console.log('nextTick');
});

for (let i = 0; i < 100; i++) {
  console.log('for loop');
}
