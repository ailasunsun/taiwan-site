'use strict';


// const modalBtns = document.querySelectorAll(".modalButton");


// modalBtns.forEach(function (btn) {
//   btn.onclick = function () {
//     const modal = btn.getAttribute('data-modal');
//     document.getElementById(modal).style.display = "block";
//   };
// });

// const closeBtns = document.querySelectorAll(".modal_close");
// closeBtns.forEach(function (btn) {
//   btn.onclick = function () {
//     const modal = btn.closest('.modal_container');
//     modal.style.display = "none";
//   };
// });

// window.onclick = function (event) {
//   if (event.target.className === "modal_container") {
//     event.target.style.display = "none";
//   }
// };

document.getElementById('market_btn2').onclick = function () {
  const modalWindow = document.getElementById('modal_marketbox2');
  modalWindow.style.display = 'block';

  const closeBtn = document.getElementById('close_btn2');
  closeBtn.onclick = function () {
    modalWindow.style.display = 'none';
  }
};

document.getElementById('market_btn3').onclick = function () {
  const modalWindow = document.getElementById('modal_marketbox3');
  modalWindow.style.display = 'block';

  const closeBtn = document.getElementById('close_btn3');
  closeBtn.onclick = function () {
    modalWindow.style.display = 'none';
  }
};


document.getElementById('market_btn4').onclick = function () {
  const modalWindow = document.getElementById('modal_marketbox4');
  modalWindow.style.display = 'block';

  const closeBtn = document.getElementById('close_btn4');
  closeBtn.onclick = function () {
    modalWindow.style.display = 'none';
  }
};
document.querySelector('.modalButton').onclick = function () {
  const menuBtn = document.querySelector('.menu-icon');
  menuBtn.style.display = 'none';
};