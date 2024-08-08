'use strict';

// Map あえてJavaScriptでページ遷移
document.getElementById('taipei').addEventListener('click', function () {
    location.assign('../taipei/index.html');
}, false);

document.getElementById('taichung').addEventListener('click', function () {
    location.assign('../taichung/index.html');
}, false);

document.getElementById('tainan').addEventListener('click', function () {
    location.assign('../tainan/index.html');
}, false);


// Garrely
const slide = document.getElementById('slider_item');
const prev = document.getElementById('indicator_prev');
const next = document.getElementById('indicator_next');
const indicator = document.getElementById('indicator');
const lists = document.querySelectorAll('.indicator_list');
const totalSlides = lists.length;
let count = 0;
let autoPlayInterval;
function updateListBackground() {
    for (let i = 0; i < lists.length; i++) {
        lists[i].style.backgroundColor = i === count % totalSlides ? '#000' : '#fff';
    }
}
function nextClick() {
    slide.classList.remove(`slide${count % totalSlides + 1}`);
    count++;
    slide.classList.add(`slide${count % totalSlides + 1}`);
    updateListBackground();
}
function prevClick() {
    slide.classList.remove(`slide${count % totalSlides + 1}`);
    count--;
    if (count < 0) count = totalSlides - 1;
    slide.classList.add(`slide${count % totalSlides + 1}`);
    updateListBackground();
}
function startAutoPlay() {
    autoPlayInterval = setInterval(nextClick, 3000);
}
function resetAutoPlayInterval() {
    clearInterval(autoPlayInterval);
    startAutoPlay();
}

next.addEventListener('click', () => {
    nextClick();
    resetAutoPlayInterval();
});
prev.addEventListener('click', () => {
    prevClick();
    resetAutoPlayInterval();
});
indicator.addEventListener('click', (event) => {
    if (event.target.classList.contains('list')) {
        const index = Array.from(lists).indexOf(event.target);
        slide.classList.remove(`slide${count % totalSlides + 1}`);
        count = index;
        slide.classList.add(`slide${count % totalSlides + 1}`);
        updateListBackground();
        resetAutoPlayInterval();
    }
});
startAutoPlay();


// https://tagnote.net/js-parts/slideshow/#%E3%82%B9%E3%83%A9%E3%82%A4%E3%83%89%E6%9C%AC%E4%BD%93%E3%83%BB%E5%B7%A6%E5%8F%B3%E3%81%AE%E3%83%9C%E3%82%BF%E3%83%B3%E3%83%BB%E3%82%A4%E3%83%B3%E3%82%B8%E3%82%B1%E3%83%BC%E3%82%BF%E3%83%BC