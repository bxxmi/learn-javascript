// 1. Shorthand property names
// key와 value 값이 같다면 하나로 축약 가능
const name = 'Bomi';
const age = '26';

// e.g. 👎🏻
const bomi1 = {
  name: name,
  age: age
};

// e.g. 👍🏻
const bomi2 = {
  name,
  age
};

// 2. Destructuring Assignment
// 2-1. Object
const student = {
  name: 'Bomi',
  level: 1
};

// e.g. 👎🏻
const name = student.name;
const level = student.level;
console.log(name, level);

// e.g. 👍🏻
// key 이름을 그대로 사용함
const { name, level } = student;
console.log(name, level);

// 만약, 키 이름을 변경해서 사용하고 싶다면?
const { name: studentName, level: studentLevel } = student;
console.log(studentName, studentLevel);

// 2-2. Array
const animals = ['🐱', '🐶'];

// e.g. 👎🏻
const first = animals[0];
const second = animals[1];
console.log(first, second);

// e.g. 👍🏻
// 배열에 저장된 데이터의 순서대로 값이 저장됨
const [ first, second ] = animals;
console.log(first, second);

// 3. Spread Syntax
// ... 키워드 사용
// 📌 오브젝트가 가리키는 주소의 참조 값만 복사하기 때문에 원래의 오브젝트 값 변경 시 모두 영향을 받는다
const obj1 = { key: 'key1' };
const obj2 = { key: 'key2' };
const array = [ obj1, obj2 ];

// object copy
const objectCopy = { ...obj1 };

// array copy
const arrayCopy1 = [...array];

// 복사와 동시에 값 추가
const arrayCopy2 = [...array, { key: 'key3' }];

// array concatenation
const fruits1 = ['🍑', '🥝'];
const fruits2 = ['🍒', '🍓'];
const fruits = [...fruits1, ...fruits2];
console.log(fruits);

// object merge
// 📌 key 이름이 동일한 오브젝트를 합칠 때 마지막에 선언한 값이 최종 값으로 출력됨
const dog1 = { dog: '🐶' };
const dog2 = { dog: '🐕' };
const dog = { ...dog1, ...dog2 };

// 4. Default parameters
// 📌 오직 undefined 값이 출력되는 경우에만 default parameter 값이 출력 (null X)
// e.g. 👎🏻
function printMessage(messgae) {
  if (message == null) {
    message = 'default message';
  }
  console.log(message);
}

printMessage('hello');
printMessage();

// e.g. 👍🏻
// '=' 키워드를 사용해서 default 값 지정
function printMessage(message = 'default message') {
  console.log(message);
}

printMessage('hello');
printMessage();

// 5. Ternary Operator
const isCat = true;

// e.g. 👎🏻
let component;
if (isCat) {
  component = 'cat';
} else {
  component = 'dog';
}
console.log(component);

// e.g. 👍🏻
const component = isCat ? 'cat' : 'dog';
console.log(component);
console.log(isCat ? 'cat' : 'dog');

// 6. Template literals
const weather = '🌥';
const temparature = '18°C';

// e.g. 👎🏻
console.log('Today weather is' + weather + 'and temparature is' + temparature);

// e.g. 👍🏻
console.log(`Today weather is ${weather} and temparature is ${temparature}`);
