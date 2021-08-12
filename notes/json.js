// JSON
// JavaScript Object Notation
// 기본적으로 문자열로 이루어짐
// 직렬화: 네트워크를 통해 전송할 수 있도록 기본 개체를 문자열로 변환하는 것
// 역직렬화: 문자열을 기본 개체로 변환하는 것

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);

json = JSON.stringify(['apple', 'banana']);

const rabbit = {
  name: 'tokki',
  color: 'white',
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${name} can jump!`);
  }
}

// 📌 함수 or 자바스크립트의 자체 데이터는 JSON에 포함되지 않음
json = JSON.stringify(rabbit);

// print the properties want
json = JSON.stringify(rabbit, ['name', 'color']);

// use callback
// 데이터를 좀 더 세밀하게 통제하고 싶을 때 사용
json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
});

// 2. JSON to Object 
// parse(json)
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);

// 📌 (중요) 직렬화된 object 값을 다시 object로 사용하는 방법
// birthDate는 stringify로 인해 문자열이 됐고,
// 이후에 parse를 진행해도 그대로 문자열이기 때문에 기존에 지정한 value값인 Date()를 사용할 수 없음
// 따라서, 아래 구문은 error 발생
console.log(obj.birthDate.getDate());

// 해결: use callback reviver
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  // birthDate 키 값이 존재한다면 새로운 Date() 오브젝트를 생성하고 value를 사용할 것이다
  return key === 'birthDate' ? new Date(value) : value
});

// success! 
// why? callback 함수를 사용해서 새로운 객체를 만들었기 때문이다.
console.log(obj.birthDate.getDate()); 