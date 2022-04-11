let count = 0;

function increase() {
  count++;
}
function getCount() {
  return count;
}

module.exports.getCount = getCount; // 자바스크립트에서 제공 안해주던 시절 노드 자체적으로 제공하기 위해 만든 문법 - 지금은 export, import
module.exports.increase = increase;
console.log(module); // 모듈에 대한 정보 - 실행해보면 exports에 getCount: [Function: getCount] 이런식으로 제공되어 있다.

// 주의!
// 처음 module은 module.exports를 가르킨다.
// 하지만 exports = {}와 같이 exports에 임의의 값을 할당하면 전혀 다른 오브젝트가 된다. - 지금 안쓰니까 별로 신경 안써도 된다.
