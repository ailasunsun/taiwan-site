'use strict';

// スクロールしたら関数実施
window.addEventListener('scroll', function () {
    //トップへ戻るボタンの要素取得
    let topBtn = document.querySelector('.topBtn');

    //画面上部を基準にheader要素下の位置取得
    const headerBtm = document.querySelector('header').getBoundingClientRect().bottom;

    //headerより下にスクロールされたらappearBtnを付与
    if (headerBtm <= 0) {
        topBtn.classList.add('appearBtn');
    }
    else {
        //したからスクロールした時にheaderの下部分が画面上部未に触れたらクラス削除
        topBtn.classList.remove('appearBtn');
    }
    //body要素の高さ
    const bodyHeight = document.body.scrollHeight

    //スクロールの高さ
    const scrollPosition = window.scrollY;

    //windowの高さ
    const windowHeignt = document.body.clientHeight

    //footer取得
    const footer = document.querySelector('footer');

    //footerの高さ
    const footerHeight = footer.offsetHeight;
    // console.log(bodyHeight, scrollPosition, windowHeignt, footerHeight);

    if (bodyHeight - scrollPosition - windowHeignt <= footerHeight) {
        topBtn.classList.add('stopTopBtn');
    } else {
        topBtn.classList.remove('stopTopBtn');
    }

});