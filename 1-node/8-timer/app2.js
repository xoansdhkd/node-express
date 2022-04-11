const process = require('process');

console.time('timeout 0');
console.log('code1');
setTimeout(() => {
  console.log('setTimeout 0');
}, 0);
console.timeEnd('timeout 0');

console.log('code2');
setImmediate(() => {
  // setImmediate보다 setTimeout 0이 더 빠르게 동작 - 하지만 거의 비슷
  console.log('setImmediate');
});

console.log('code3');
process.nextTick(() => {
  console.log('process.nextTick');
});
