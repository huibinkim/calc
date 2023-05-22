const $form = document.querySelector("#form");
const $year = document.querySelector("#year");
const $month = document.querySelector("#month");
const $day = document.querySelector("#day");
const calcBtn = document.querySelector("#calcBtn");
const $result = document.querySelector(".resultValue");
let yearValue;
let monthValue;
let dayValue;
function changeValue() {}

//날짜 계산
// function dayCount() {
//   const dDay = new Date(`${yearValue}`);
//   const todayNum = Date.now(); //오늘 날짜 현재를 밀리초로
//   const today = new Date(todayNum); //오늘 날짜

//   const count = dDay - today;
// }

//현재화면에 select값 나타내기
const onCalcDate = (e) => {
  yearValue = $year.value;
  monthValue = $month.value;
  dayValue = $day.value;
  $result.append(`${yearValue}, ${monthValue}, ${dayValue}`);

  const dDay = new Date(`${monthValue} ${dayValue} ${yearValue} `); //디데이 날짜
  const todayNum = Date.now(); //오늘 날짜 현재를 밀리초로
  const today = new Date(todayNum); //오늘 날짜
  console.log(dDay);
  console.log(today);
};

//계산 버튼 클릭하면 onCalcDate 실행
calcBtn.addEventListener("click", onCalcDate);

// $form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let yearValue = $year.value;
//   let monthValue = $month.value;
//   let dayValue = $day.value;
//   $result.append(`${yearValue}, ${monthValue},,,, ${dayValue}`);
// });
