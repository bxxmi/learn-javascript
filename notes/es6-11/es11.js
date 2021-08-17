// 1. Optional Chaining (ES11)
const person1 = {
  name: 'Bomi',
  job: {
    title: 'S/W Enginner',
    manager: {
      name: 'Bob',
    },
  },
};

const person2 = {
  name: 'Bomi'
};

// e.g. 👎🏻👎🏻👎🏻👎🏻👎🏻👎🏻👎🏻👎🏻👎🏻👎🏻👎🏻
function printManager(person) {
  console.log(person.job.manager.name);
}

printManager(person1);

// e.g. 👎🏻👎🏻👎🏻👎🏻👎🏻
function printManager(person) {
  console.log(
    person.job
    ? person.job.manager
      ? person.job.manager.name
      : undefined
    : undefined
  );
}

printManager(person1);

// e.g. 👎🏻
function printManager(person) {
  console.log(person.job && person.job.manager && person.job.manager.name);
  
  printManager(person1);
}

// e.g. 👍🏻
function printManager(person) {
  console.log(person.job?.manager?.name);
}

printManager(person1);

// 2. Nullish Coalescing Operator (ES11)
// Logical OR operator
// 📌 false: false, '', 0, null, undefined
const name = 'Bomi';
const userName = name || 'Guest';
console.log(userName);

// e.g. 👎🏻
const name = '';
const userName = name || 'Guest';
console.log(userName); // 결과: Guest

const num = 0;
const message = num || 'undefined';
console.log(message);

// e.g. 👍🏻
const name = '';
const userName = name ?? 'Guest';
console.log(userName); // 결과: 입력한 그대로 빈 값 출력

const num = 0;
const message = num ?? 'undefined';
console.log(message); // 결과: 입력한 그대로 0 출력

// 함수를 실행한 결과값을 활용하기도 함
const result = getInstanceState() ?? fetchFromServer();
console.log(reuslt);

function getInstanceState() {
  return null;
}

function fetchFromServer() {
  return '🐶';
}