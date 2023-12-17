document.addEventListener('DOMContentLoaded', function() {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const sliderWrapper = document.querySelector('.sliderWrapper');
    const sliderItems = document.querySelectorAll('.sliderItem');
    const visibleItems = 1; // Number of visible items in the slider
    let position = 0;

    // Calculate the total width of all slider items
    const totalItemWidth = Array.from(sliderItems).reduce((acc, item) => acc + item.offsetWidth, 0);

    // Calculate the width to slide by considering totalItemWidth and visible items
    const itemWidthToSlide = totalItemWidth / sliderItems.length * visibleItems;

    // Event listener for previous button
    prevBtn.addEventListener('click', function() {
        if (position > 0) {
            position -= itemWidthToSlide;
            position = Math.max(position, 0);
            sliderWrapper.style.transform = `translateX(-${position}px)`;
        }
    });

    // Event listener for next button
    nextBtn.addEventListener('click', function() {
        if (position < totalItemWidth - itemWidthToSlide) {
            position += itemWidthToSlide;
            position = Math.min(position, totalItemWidth - itemWidthToSlide);
            sliderWrapper.style.transform = `translateX(-${position}px)`;
        }
    });
});

