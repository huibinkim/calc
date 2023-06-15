//값 localStorage로 받아오기
const { year, month, day, dday, hour, min, sec } = JSON.parse(
  localStorage.getItem('resultData')
);

const selectDay = document.querySelector('.dayCalcResult p');
const $dayValue = document.querySelector('#dayValue');
const $timeValue = document.querySelector('#timeValue');
const $iconImg = document.querySelector('.gnb .icon');

//localStorage로 받아온 값 화면에 뿌리기

setInterval(() => {
  const today = new Date();
  const dayResult = new Date(`${year} ${month} ${day} `);
  const setDateYear = dayResult.getFullYear(); //디데이 연도
  const setDateMonth = dayResult.getMonth() + 1; //디데이 월
  const setDateDay = dayResult.getDate(); //디데이 일
  const count = dayResult.getTime() - today.getTime();
  const dayNum = Math.floor(count / (1000 * 60 * 60 * 24));
  const hoursNum = Math.floor(
    (count % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  console.log(dayResult);

  const minNum = Math.floor((count % (1000 * 60 * 60)) / (1000 * 60));
  const secNum = Math.floor((count % (1000 * 60)) / 1000);
  selectDay.textContent = `${year}년 ${month}월 ${day}일 까지 `;
  $dayValue.textContent = `${dayNum}일 ${hoursNum}시간 ${minNum}분 ${secNum}초 `;
}, 1000);

// $dayValue.style.background = "yellow";

// const count = select.getTime() - today.getTime();
// console.log(count);
//홈버튼 클릭시 메인으로 이동
const movePage = () => {
  location.href = 'index.html';
};

$iconImg.addEventListener('click', movePage);
