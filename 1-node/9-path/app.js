const path = require('path');

// POSIX (Unix: Mac, Linux): 'Users/temp/myfile.html'
// Windows: 'C:\\temp\\myfile.html'

console.log(__dirname); // 수행 중인 디렉토리 경로
console.log(__filename); // 수행 중인 파일 경로

console.log(path.sep); // 경로 구분자
console.log(path.delimiter); // 환경변수 구분자

// basename
console.log(path.basename(__filename));
console.log(path.basename(__filename, '.js'));

// dirname
console.log(path.dirname(__filename));

// extension
console.log(path.extname(__filename));

// parse
const parsed = path.parse(__filename); // 분할
console.log(parsed);
parsed.root;
parsed.name;

const str = path.format(parsed); // 합치기
console.log(str);

// isAbsolute
console.log('isAbsolute?', path.isAbsolute(__dirname));
console.log('isAbsolute?', path.isAbsolute('../'));

// normalize
console.log(path.normalize('./folder//////sub')); // 중첩된 경로 구분자를 하나로 변환?

// join
console.log(__dirname + path.sep + 'image'); // 이렇게 경로를 만들 수 있지만
console.log(path.join(__dirname, 'image')); // 조인을 이용하면 자동으로 운영체제에 맞는 경로를 생성해준다.
