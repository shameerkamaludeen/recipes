// Changing mobile menubar to normal for other screens
if (document.documentElement.clientWidth > 768) {
    document.querySelector('nav').classList.remove('hide-visually');
    // document.querySelector('.fas.fa-bars').style.visibility = 'hidden';
}

// Mobile menu icon action
const faBar = document.querySelector('.fas.fa-bars');
faBar.addEventListener('click', () => {
    const nav = document.querySelector('nav');
    if (nav.getAttribute('class') === 'hide-visually') {
        nav.classList.remove('hide-visually');
    } else {
        nav.setAttribute('class', 'hide-visually');
    }
});

window.addEventListener('resize', () => {
    if (document.documentElement.clientWidth > 768) {
        document.querySelector('nav').classList.remove('hide-visually');
        // document.querySelector('.fas.fa-bars').style.visibility = 'hidden';
    } else {
        const nav = document.querySelector('nav');
        nav.setAttribute('class', 'hide-visually');
        // document.querySelector('.fas.fa-bars').style.visibility = 'visible';
    }
});
