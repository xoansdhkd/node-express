function hello() {
  console.log(this);
  console.log(this === global);
}

hello();

class A {
  constructor(num) {
    this.num = num;
  }
  memberFunction() {
    console.log('----------');
    console.log(this);
    console.log(this === global);
  }
}
const a = new A(1);
a.memberFunction();

// 결과
// 함수의 this는 global
// 클래스의 this는 객체 자기자신

// 자바스크립트와 차이점
console.log('----------');
console.log(this); // global이 아니다
console.log(this === module.exports);
// 브라우저에서는 밖에서 쓰이는 this는 global을 가리키지만 node에서 this는 module.exports를 가르킨다.
