
// ... cursor move ... //

window.addEventListener('mousemove', event => {
    document.querySelector('.mouseMove').style.left = event.pageX + "px";
    document.querySelector('.mouseMove').style.top = event.pageY + "px";
})


// ... cursor write ... //

window.addEventListener('mousemove', event => {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    document.body.prepend(pixel);
    pixel.style.left = event.clientX + "px";
    pixel.style.top = event.clientY + "px";
})


// ... cursor stamp ... //

window.addEventListener('click', event => {
    const stamp = document.createElement('div');
    stamp.classList.add('stamp');
    document.body.prepend(stamp);
    stamp.style.left = event.clientX + "px";
    stamp.style.top = event.clientY + "px";
})


