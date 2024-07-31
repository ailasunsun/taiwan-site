'use strict';
// スライダーおためし
// script.js
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const slides = Array.from(slider.children);
    const dots = Array.from(document.querySelectorAll('.dot'));

    let currentIndex = 0;

    function updateSlider() {
        const slideWidth = slides[0].getBoundingClientRect().width;
        slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        updateDots();
    }

    function updateDots() {
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex].classList.add('active');
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
        });
    });

    window.addEventListener('resize', updateSlider);

    updateSlider(); // 初期表示のために呼び出し
});
