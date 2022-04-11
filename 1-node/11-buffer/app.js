// Fixed-size chunk of memory
// array of integers, byte of data

const buf = Buffer.from('Hi');

console.log(buf);
console.log(buf.length);
console.log(buf[0]);
console.log(buf[1]);
console.log(buf.toString()); // toString은 인자로 encoding 방식을 지정할 수 있는데 default는 utf-8이다.

// create
const buf2 = Buffer.alloc(2); // 메모리 공간 지정 및 초기화 - size 2
const buf3 = Buffer.allocUnsafe(2); // 초기화 하지 않음 - 조금 더 빠르지만 안전하지 않다.
buf2[0] = 72;
buf2[1] = 105;
console.log(buf2);
console.log(buf2.toString());
buf2.copy(buf3);
console.log(buf3.toString());

// concat
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString());
