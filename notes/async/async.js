'use strict';

// async & await
// clear style of using promise

// 1. async
// async 키워드를 함수 앞에다 사용하면 자동으로 promise로 변환
async function fetchUser() {
  return 'bomi';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await 
// async 키워드가 사용된 곳에서만 쓸 수 있음
// promise의 상태가 fulfilled 또는 reject 될 때까지 async 함수의 실행을 일시 정지함
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000);
  return '🍎';
}

async function getBanana() {
  await delay(1000);
  return '🍌';
}

// promise callback hell!
function pickFruits1() {
  return getApple()
  .then (apple => {
    return getBanana()
    .then (banana => `${apple} + ${banana}`);
  });
}

// ✨ use async (병렬처리 X : 결과가 2초 뒤에 나옴)
async function pickFruits2() {
  const apple = await getApple();
  const banana = await getBanana();
  return `${apple} + ${banana}`
}

// ✨ use async (병렬처리 O : 결과가 1초 뒤에 나옴)
async function pickFruits2() {
  // 각각의 promise를 연결함
  // 그러나, 이 방법도 코드가 지저분하다
  // 해결 방법은 .all()!
  const applePromise = getApple();
  const bananaPromise = getBanana()
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`
}

pickFruits2().then(console.log);

// 3. useful Promise APIs
// .all()
// 프로미스를 배열 형태로 전달하고, 그 프로미스들을 병렬적인 작업을 수행하도록 함
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()])
  .then(fruits => fruits.join('+'));
}

pickAllFruits().then(console.log);

// .race()
// 프로미스를 배열 형태로 전달하고, 가장 먼저 반환되는 프로미스의 값만 전달됨
function pinkOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pinkOnlyOne().then(console.log);