const year = document.querySelector("select#date-select");
const month = document.querySelector("#monthValue");
const day = document.querySelector("#dayValue");
const calcBtn = document.querySelector("#calcBtn");
const $result = document.querySelector(".resultValue");

const getValue = (e) => {
  //   const array = [];
  //   array.push(e.target.value);
  localStorage.setItem("key:date", `value:${e.target.value}`);
};

function dayCount() {
  const dDay = new Date(`${yearValue}`);
  const today = new Date();
  const count = dDay - today;
}

const onCalcDate = () => {};

calcBtn.addEventListener("click", onCalcDate);
year.addEventListener("change", getValue);
month.addEventListener("change", getValue);
day.addEventListener("change", getValue);
