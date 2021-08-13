// Callback to Promise
class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(
          (id === 'bomi' && password === 'kim') ||
          (id === 'coder' && password === 'academy')
        ) {
          resolve(id);
        } else {
          reject(new Error('not found'));
        }
      }, 2000);
      });
    }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(()=> {
        if (user === 'bomi') {
          resolve({ name: 'bomi', role: 'admin'});
        } else {
          reject(new Error('no access'));
        }
      }, 1000);
    });
  }
}

// 위의 비동기 promise를 동기적으로 만듦
async function getUserWithRole(id, password) {
  const id = await this.loginUser(id, password);
  const role = await this.getRoles(id);
  return role;
}

const userStorage = new UserStorage();
const id = prompt('enter yout id');
const password = prompt('enter yout password');

userStorage.getUserWithRole(id, password)
.then(console.log);
