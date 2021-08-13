// 함수를 인자로 전달
function doSomething(add) {
  const result = add(2, 3);
  console.log(result);
}

// 값을 리턴하는 함수
function add(a, b) {
  const sum = a + b;
  return sum;
}

// 함수 호출
// 📌 함수의 이름만 넘겨야 함수 자체를 가리키게 됨
// doSomething(add(1, 2)) is X
doSomething(add);