'use strict';

// header 領域
const btn = document.querySelector('.menu-icon');
const photo = document.getElementById('button');
let isPhoto1 = true;
const photo1 = '../common/image/icon_drawer.svg';
const photo2 = '../common/image/icon_drawer_close.svg';

photo.src = photo1;

btn.onclick = function () {
  if (isPhoto1 === true) {
    photo.src = photo2;
    isPhoto1 = false;
  }
  else {
    photo.src = photo1;
    isPhoto1 = true;
  }
};

// モーダル開いたらメニューボタン閉じる
document.getElementById('market_btn').onclick = function () {
  const menuBtn = document.querySelector('#button');
  menuBtn.style.display = 'none';
}