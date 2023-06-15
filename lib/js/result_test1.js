//값 localStorage로 받아오기
const { year, month, day, dday, hour, min, sec } = JSON.parse(
  localStorage.getItem('resultData')
);

const selectDay = document.querySelector('.dayCalcResult p');
const $dayValue = document.querySelector('#dayValue');
const $timeValue = document.querySelector('#timeValue');
const $iconImg = document.querySelector('.gnb .icon');

//localStorage로 받아온 값 화면에 뿌리기
selectDay.textContent = `${year}년 ${month}월 ${day}일 까지 `;
$dayValue.textContent = `${dday}일 ${hour}시간 ${min}분 ${sec}초 `;
// $dayValue.style.background = "yellow";

// const count = select.getTime() - today.getTime();
// console.log(count);
//홈버튼 클릭시 메인으로 이동
const movePage = () => {
  location.href = 'index.html';
};

$iconImg.addEventListener('click', movePage);
