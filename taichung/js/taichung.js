'use strict';


// モーダル文化施設　開閉
document.getElementById('cultural_btn').onclick = function () {
  const modalWindow = document.getElementById('mordal_culturalbox');
  modalWindow.style.display = 'block';

  const closeBtn = document.getElementById('close_culture1');
  closeBtn.onclick = function () {
    modalWindow.style.display = 'none';
  }
};

//2 
document.getElementById('cultural_btn2').onclick = function () {
  const modalWindow = document.getElementById('mordal_culturalbox2');
  modalWindow.style.display = 'block';

  const closeBtn = document.getElementById('close_culture2');
  closeBtn.onclick = function () {
    modalWindow.style.display = 'none';
  }
};

//3
document.getElementById('cultural_btn3').onclick = function () {
  const modalWindow = document.getElementById('mordal_culturalbox3');
  modalWindow.style.display = 'block';

  const closeBtn = document.getElementById('close_culture3');
  closeBtn.onclick = function () {
    modalWindow.style.display = 'none';
  }
};

//4
document.getElementById('cultural_btn4').onclick = function () {
  const modalWindow = document.getElementById('mordal_culturalbox4');
  modalWindow.style.display = 'block';

  const closeBtn = document.getElementById('close_culture4');
  closeBtn.onclick = function () {
    modalWindow.style.display = 'none';
  }
};