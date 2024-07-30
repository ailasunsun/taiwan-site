'use strict';

document.getElementById('market_btn').onclick = function () {
    const modalWindow = document.getElementsById('modal_market');
    modalWindow.style.display = 'flex';

    const closeBtn = document.getElementById('close_btn');
    closeBtn.onclick = function () {
        modalWindow.style.display = 'none';
    }
};


