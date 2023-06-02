//값 local로 받아오기
const { year, month, day, dday, hour, min, sec } = JSON.parse(
  localStorage.getItem("resultData")
);
const selectDay = document.querySelector(".dayCalcResult h1");
const $dayValue = document.querySelector("#dayValue");
const $timeValue = document.querySelector("#timeValue");

selectDay.textContent = `${year}년 ${month}월 ${day}일 까지`;
$dayValue.textContent = `${dday}일 ${hour}시 ${min}분 ${sec}초`;
// const value = localStorage.getItem("resultData");
// console.log(value);
