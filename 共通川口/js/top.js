'use strict';

// ヘッダー用javascript
// メニュー表示ボタンのjavascript
document.getElementById('openButton').onclick = function () {
  const openMenu = document.getElementById('openMenu');
  openMenu.style.display = 'block';
};

// メニュー非表示ボタンのjavascript
document.getElementById('closeButton').onclick = function () {
  const closeMenu = document.getElementById('openMenu');
  closeMenu.style.display = 'none';
};

