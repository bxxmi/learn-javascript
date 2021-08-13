// HTML 요소 1개 검색 및 찾기
const boxEl = document.querySelector('.box');

// HTML 요소 모두 검색 및 찾기
// 📌 이때, 찾은 요소들은 모두 유사 배열 형태
const boxEls = document.querySelectorAll('.box'); 

// forEach: 찾은 요소들을 반복하는 함수
// 첫 번째 매개변수: 반복 중인 요소
// 두 번째 매개변수: 반복 중인 번호
boxEls.forEach(function(boxEl, index) {});

// HTML 요소에 이벤트 적용
boxEl.addEventListener();

// 이벤트 적용 시 인수 추가 가능
boxEl.addEventListener(1, 2);

// 1. 이벤트(이벤트, 인자 값)
boxEl.addEventListener('click', 2);

// 2. 핸들러(Handler, 함수)
boxEl.addEventListener('click', function() {
  console.log('click!');
});

// 요소의 클래스 정보 객체 활용
// classList: 요소에 클래스 추가 및 삭제 가능하게함s
boxEl.classList.add('active');
let isContains = boxEl.classList.contains('active');
console.log(isContains); // true

boxEl.classList.remove('active'); 
isContains = boxEl.classList.contains('active');
console.log(isContains); // false

// textContent: getter, setter 용도
console.log(boxEl.textContent);

boxEl.textContent = "wow";
console.log(boxEl.textContent);