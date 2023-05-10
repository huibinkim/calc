const $form = document.querySelector("#form");
const $year = document.querySelector("#year");
const $month = document.querySelector("#month");
const $day = document.querySelector("#day");
const calcBtn = document.querySelector("#calcBtn");
const $result = document.querySelector(".resultValue");

function changeValue() {}

function dayCount() {
  const dDay = new Date(`${yearValue}`);
  const today = new Date();
  const count = dDay - today;
}
let yearValue;
let monthValue;
let dayValue;
const onCalcDate = (e) => {
  yearValue = $year.value;
  monthValue = $month.value;
  dayValue = $day.value;
  $result.append(`${yearValue}, ${monthValue}, ${dayValue}`);
};
calcBtn.addEventListener("click", onCalcDate);
// $form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let yearValue = $year.value;
//   let monthValue = $month.value;
//   let dayValue = $day.value;
//   $result.append(`${yearValue}, ${monthValue},,,, ${dayValue}`);
// });
