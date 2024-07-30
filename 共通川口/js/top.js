'use strict';

//ローディングdiv
const loadingPage = document.getElementById('loading');

//ロゴ
const logo = document.getElementById('logo');

//初期は透明
logo.style.opacity = "0";

//フェードインアニメーション
window.addEventListener('load', function () {
  logo.style.opacity = '1';
  logo.style.transition = 'opacity 3000ms ease-in-out';
  loadingPage.classList.add('hidden');
  fadeOut();
});

//フェードアウトアニメーション
function fadeOut() {
  const hidden = document.querySelector('.hidden');
  hidden.style.opacity = '0';
  hidden.style.transition = 'opacity 3000ms ease-in-out 3000ms';
  setTimeout(deleteElement, 6000);
}

//ローディング要素削除
function deleteElement() {
  const hidden = document.querySelector('.hidden');
  document.body.removeChild(hidden);
}



