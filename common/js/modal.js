'use strict';
// モーダル夜市　開閉
document.getElementById('market_btn').onclick = function () {
    const modalWindow = document.getElementById('modal_marketbox');
    modalWindow.style.display = 'block';

    const closeBtn = document.getElementById('close_btn');
    closeBtn.onclick = function () {
        modalWindow.style.display = 'none';
    }
};

// モーダル文化施設　開閉
document.getElementById('cultural_btn').onclick = function () {
    const modalWindow = document.getElementById('mordal_culturalbox');
    modalWindow.style.display = 'block';

    const closeBtn = document.getElementById('close_culture1');
    closeBtn.onclick = function () {
        modalWindow.style.display = 'none';
    }
};