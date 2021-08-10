'use strict'

// Object
// 📌 key와 value의 집합체

// 1. Literals and properties
// object literal 선언
const obj1 = {};
// object constructor 선언
const obj2 = new Object();

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const bomi = {name: 'bomi', age: 26};
print(bomi);

// Javascript can add properties later
bomi.hasJob = true;
console.log(bomi.hasJob);

// Javascript can delete properties later
delete bomi.hasJob;
console.log(bomi.hasJob); // 결과: undefined

// 2. Computed properties
// 📌 key 값은 항상 string 타입
console.log(bomi.name);
// 아래와 같이 Computed properties 문법은 실시간으로 원하는 키 값을 받아오고 싶을 때 사용
console.log(bomi['name']);

// 3. Property value shorthand
const person1 = {name: 'bob', age: 2};
const person2 = {name: 'steve', age: 3};
const person3 = {name: 'dave', age: 4};
const person4 = new Person('bomi', 26);

// 4. Contructor function
// 순수하게 오브젝트를 생성하는 함수의 이름은 대문자로 시작
function Person(name ,age) {
  this.name = name;
  this.age = age;
} 

// 5. in operator
// 오브젝트 안에 찾고자 하는 key가 있는지 판별함
console.log('name' in bomi);

// 6. for..in VS for..of
// 6-1. for (key in obj)
for (key in bomi) {
  console.log(key);
}

// 6-2. for (value of iterable)
// 순차적인 성격을 띄고있음
const array = [1,2,3,4,5];
for (value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, ... ])
const user = {name:'bomi', age:26};
const user2 = user;
user2.name = 'coder';
console.log(user);

// 7-1. old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
} 
console.log(user3);

// 7-2. new way
const user4 = Object.assign({}, user);
console.log(user4); 

// 7-3. another example
const fruit1 = {color:'red'};
const fruit2 = {color:'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); // 결과: blue, 이유: 값이 계속 덮어씌워지기 때문
console.log(mixed.size);