//값 localStorage로 받아오기
const { year, month, day } = JSON.parse(localStorage.getItem('resultData'));

const selectDay = document.querySelector('.dayCalcResult p');
const $dayValue = document.querySelector('#dayValue');
const $timeValue = document.querySelector('#timeValue');
const $iconImg = document.querySelector('.gnb .icon');
//localStorage로 받아온 값 화면에 뿌리기
setInterval(() => {
  const today = new Date();
  const dayResult = { year, month, day };
  const $year = dayResult.year;
  const $month = dayResult.month;
  const $day = dayResult.day;
  const setDday = new Date(`${$year} ${$month} ${$day}`);

  const setDateYear = setDday.getFullYear(); //디데이 연도
  const setDateMonth = setDday.getMonth() + 1; //디데이 월
  const setDateDay = setDday.getDate(); //디데이 일
  const count = setDday.getTime() - today.getTime();
  const dayNum = Math.floor(count / (1000 * 60 * 60 * 24));
  const hoursNum = Math.floor(
    (count % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minNum = Math.floor((count % (1000 * 60 * 60)) / (1000 * 60));
  const secNum = Math.floor((count % (1000 * 60)) / 1000);
  selectDay.textContent = `${setDateYear}년 ${setDateMonth}월 ${setDateDay}일 까지 `;
  $dayValue.textContent = `${dayNum}일 ${hoursNum}시간 ${minNum}분 ${secNum}초 `;
}, 1000);

// $dayValue.style.background = "yellow";

// const count = select.getTime() - today.getTime();
// console.log(count);
//홈버튼 클릭시 메인으로 이동
const movePage = () => {
  location.href = 'index.html';
  localStorage.clear();
};

$iconImg.addEventListener('click', movePage);
