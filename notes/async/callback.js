'use strict';

// JavaScript is synchronous
// 호이스팅 된 이후부터 코드들이 작성된 순서를 따라 위에서부터 하나씩 동기적으로 실행
console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');

// 동기 callback
function printImmediately(print) {
  print();
}

printImmediately(()=> console.log('hello'));

// 비동기 callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}

printWithDelay(()=> console.log('async callback'), 2000);

// Callback Hell example
// 가독성 👎🏻
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if(
        (id === 'bomi' && password === 'kim') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(()=> {
      if (user === 'bomi') {
        onSuccess({ name: 'bomi', role: 'admin'});
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt('enter yout id');
const password = prompt('enter yout password');

userStorage.loginUser(
  id,
  password,
  user => {
    userStorage.getRoles(
      user,
      userWithRole => {
        alert(`Hello ${userWithRole.name}, you are ${userWithRole.role} role`); 
      },
      error => {
        console.log(error);
      })
  },
  error => {
    console.log(error);
  });