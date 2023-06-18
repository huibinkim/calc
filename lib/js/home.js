const $loading = document.querySelector('.loading-con');

//최초 로드
window.onload = function () {
  //로딩페이지 호출
  loadPage();
  //3초 후 로딩페이지 닫기 호출
  setTimeout(loadStopPage, 3000);
};

const loadPage = () => {
  console.log('로딩 시작');
  $loading.style.display = 'block';
};

const loadStopPage = () => {
  console.log('로딩 완료');
  $loading.style.display = 'none';
};

//버튼 클릭하면 디데이 페이지로 이동
const movePage = () => {
  location.href = 'sub1.html';
};

//로딩
const loadingImg = document.querySelector('#loading-bar');
const loadingTxt = document.querySelector('#loading-txt');

//로딩이미지 회전
loadingImg.animate(
  [
    { transform: 'rotate(0deg)', opacity: 1 },
    { transform: 'rotate(90deg)' },
    { transform: 'rotate(180deg)', opacity: 0.1 },
    { transform: 'rotate(270deg)' },
    { transform: 'rotate(360deg)', opacity: 1 },
  ],
  {
    duration: 1000,
    easing: 'ease-out',
    iterations: Infinity,
    // endDelay: 2000,
  }
);

//로딩텍스트 애니메이션
const newTxt = 'LOADING...';
const oneByTxt = newTxt.split(''); //한글자씩
let txtBoolean = false;
let txtIndex = 0;

if (txtBoolean == false) {
  txtBoolean = true;
  setInterval(() => {
    if (txtIndex < oneByTxt.length) {
      loadingTxt.append(oneByTxt[txtIndex]);
      txtIndex++;
    }
  }, 300);
}

// setInterval(() => {
//   for (let i = 0; i < oneByTxt.length; i++) {
//     loadingTxt.append(oneByTxt[i]);
//   }
// }, 500);
