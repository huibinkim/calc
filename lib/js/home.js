const $loading = document.querySelector(".loading-con");
// $(window).on("load", function () {
//   setTimeout(() => {
//     $loading.fadeOut();
//   }, 300);
// });

//최초 로드
window.onload = function () {
  //로딩페이지 호출
  loadPage();
  //3초 후 로딩페이지 닫기 호출
  setTimeout(loadStopPage, 3000);
};

const loadPage = () => {
  console.log("로딩 시작");
};

const loadStopPage = () => {
  console.log("로딩 완료");
};

//버튼 클릭하면 디데이 페이지로 이동
const movePage = () => {
  location.href = "sub1.html";
};
