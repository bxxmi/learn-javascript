'use strict';

// Promise is a JavaScript object for asynchronos operation
// Promise is a class
// State
// pending state: 프로미스가 만들어진 후 개발자가 지정한 작업이 수행되는 상황
// fulfilled state: 작업의 성공
// rejected state: 작업의 실패

// Producer VS Consumer
// 원하는 기능을 수행해서 해당 데이터를 만들어내는 producer
// 원하는 데이터를 사용하는 consumer

// 1. Producer
// 📌 (중요) 프로미스를 생성하는 순간 executor callback function 자동 실행
// 즉, 사용자가 요구하지 않았음에도 불필요하게 실행될 수 있음을 주의
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  setTimeout(()=>{
    // resolve('bomi');
    reject(new Error('no network!'));
  }, 2000);
});

// 2. Consumers
// then: 프로미스가 정상적으로 잘 수행이 됐다면 값을 받아옴
// 여기서 파라미터는 위에서 resolve 콜백 함수의 값인 'bomi'를 받아옴
promise.then((value) => {
  console.log(value);
// catch: 프로미스에서 발생한 오류 즉, reject 값을 받아옴
}).catch(error => {
  console.log(error);
// finally: 성공, 실패 상관없이 무조건 마지막에 호출됨
}).finally(()=>{
  console.log('finally');
});

// 3. Promise chaining 
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(num - 1), 1000);
  });
})
.then(num => console.log(num));

// 4. Error Handling
const getHen = () => new Promise((resolve, reject) => {
  setTimeout(() => resolve('🐓'), 1000);
});
const getEgg = hen => new Promise((resolve, reject) => {
  setTimeout(() => resolve(`${hen} => 🥚`), 1000);
});
const cook = egg => new Promise((resolve, reject) => {
  setTimeout(() => resolve(`${egg} => 🍳`), 1000);
});

getHen()
.then(hen => getEgg(hen))
// 에러 발생 시 다른 값을 넘겨주기
// 📌 해당 구문은 에러가 발생하는 곳 다음 부분에 작성하면 됨
.catch(error => {
  return '🥯';
})
.then(egg => cook(egg))
.then(meal => console.log(meal));

// 위와 같이 한 가지 값만 전달하는 경우 다음과 같이 쓸 수 있다.
// getHen()
// .then(getEgg)
// .then(cook)
// .then(console.log);