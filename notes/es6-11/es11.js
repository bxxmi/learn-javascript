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

// e.g. ππ»ππ»ππ»ππ»ππ»ππ»ππ»ππ»ππ»ππ»ππ»
function printManager(person) {
  console.log(person.job.manager.name);
}

printManager(person1);

// e.g. ππ»ππ»ππ»ππ»ππ»
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

// e.g. ππ»
function printManager(person) {
  console.log(person.job && person.job.manager && person.job.manager.name);
  
  printManager(person1);
}

// e.g. ππ»
function printManager(person) {
  console.log(person.job?.manager?.name);
}

printManager(person1);

// 2. Nullish Coalescing Operator (ES11)
// Logical OR operator
// π false: false, '', 0, null, undefined
const name = 'Bomi';
const userName = name || 'Guest';
console.log(userName);

// e.g. ππ»
const name = '';
const userName = name || 'Guest';
console.log(userName); // κ²°κ³Ό: Guest

const num = 0;
const message = num || 'undefined';
console.log(message);

// e.g. ππ»
const name = '';
const userName = name ?? 'Guest';
console.log(userName); // κ²°κ³Ό: μλ ₯ν κ·Έλλ‘ λΉ κ° μΆλ ₯

const num = 0;
const message = num ?? 'undefined';
console.log(message); // κ²°κ³Ό: μλ ₯ν κ·Έλλ‘ 0 μΆλ ₯

// ν¨μλ₯Ό μ€νν κ²°κ³Όκ°μ νμ©νκΈ°λ ν¨
const result = getInstanceState() ?? fetchFromServer();
console.log(reuslt);

function getInstanceState() {
  return null;
}

function fetchFromServer() {
  return 'πΆ';
}