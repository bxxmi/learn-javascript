'use strict'

// Object
// ๐ key์ value์ ์งํฉ์ฒด

// 1. Literals and properties
// object literal ์ ์ธ
const obj1 = {};
// object constructor ์ ์ธ
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
console.log(bomi.hasJob); // ๊ฒฐ๊ณผ: undefined

// 2. Computed properties
// ๐ key ๊ฐ์ ํญ์ string ํ์
console.log(bomi.name);
// ์๋์ ๊ฐ์ด Computed properties ๋ฌธ๋ฒ์ ์ค์๊ฐ์ผ๋ก ์ํ๋ ํค ๊ฐ์ ๋ฐ์์ค๊ณ  ์ถ์ ๋ ์ฌ์ฉ
console.log(bomi['name']);

// 3. Property value shorthand
const person1 = {name: 'bob', age: 2};
const person2 = {name: 'steve', age: 3};
const person3 = {name: 'dave', age: 4};
const person4 = new Person('bomi', 26);

// 4. Contructor function
// ์์ํ๊ฒ ์ค๋ธ์ ํธ๋ฅผ ์์ฑํ๋ ํจ์์ ์ด๋ฆ์ ๋๋ฌธ์๋ก ์์
function Person(name ,age) {
  this.name = name;
  this.age = age;
} 

// 5. in operator
// ์ค๋ธ์ ํธ ์์ ์ฐพ๊ณ ์ ํ๋ key๊ฐ ์๋์ง ํ๋ณํจ
console.log('name' in bomi);

// 6. for..in VS for..of
// 6-1. for (key in obj)
for (key in bomi) {
  console.log(key);
}

// 6-2. for (value of iterable)
// ์์ฐจ์ ์ธ ์ฑ๊ฒฉ์ ๋๊ณ ์์
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
console.log(mixed.color); // ๊ฒฐ๊ณผ: blue, ์ด์ : ๊ฐ์ด ๊ณ์ ๋ฎ์ด์์์ง๊ธฐ ๋๋ฌธ
console.log(mixed.size);