const $form = document.querySelector("#form");
const $year = document.querySelector("#year");
const $month = document.querySelector("#month");
const $day = document.querySelector("#day");
const calcBtn = document.querySelector("#calcBtn");
const $result = document.querySelector(".resultValue");
const dayOption = document.querySelector("#day option");

let yearValue;
let monthValue;
let dayValue;
let newDate = [];
//1-31까지 숫자 들은 배열 만들기
const dateNum = Array(31)
  .fill()
  .map((v, i) => i + 1);
newDate.push(...dateNum.splice(0, 32));

for (let i = 0; i < newDate.length; i++) {
  i += 1;
  $day.options[newDate.length] = new Option(String(i), `${i}`);
}

//1-31 배열안의 숫자 option에 넣기

//현재화면에 select값 나타내기
const onCalcDate = (e) => {
  yearValue = $year.value;
  monthValue = $month.value;
  dayValue = $day.value;
  $result.append(`${yearValue}, ${monthValue}, ${dayValue}`); //화면에 보여주기

  const dDay = new Date(`${monthValue} ${dayValue} ${yearValue} `); //디데이 날짜
  const setDateYear = dDay.getFullYear(); //디데이 연도
  const setDateMonth = dDay.getMonth() + 1; //디데이 월
  const setDateDay = dDay.getDate(); //디데이 일
  // const todayNum = Date.now(); //오늘 날짜 현재를 밀리초로
  const today = new Date(); //오늘 날짜
  const count = dDay.getTime() - today.getTime(); //디데이에서 현재와의 차이를 밀리초로 가져오기
  const day = Math.floor(count / (1000 * 60 * 60 * 24));
  const hours = Math.floor((count % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const min = Math.floor((count % (1000 * 60 * 60)) / (1000 * 60));
  const sec = Math.floor((count % (1000 * 60)) / 1000);

  $result.innerText = `${setDateYear}년 ${setDateMonth}월 ${setDateDay}일 까지
    ${day + 1}일
    ${hours < 10 ? `0${hours}` : hours}시간
    ${min < 10 ? `0${min}` : min}분
    ${sec < 10 ? `0${sec}` : sec}초 남았습니다.
  `;
  setTimeout(onCalcDate, 1000);
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
