const balloon = document.getElementById('air-balloon')
const cloudOne = document.getElementById('cloud-one')
const cloudTwo = document.getElementById('cloud-two')
const cloudThree = document.getElementById('cloud-three')
const cloudFour = document.getElementById('cloud-four')
const cloudFive = document.getElementById('cloud-five')
function move() {
    const incrementer = window.scrollY

    // the '10' refers to the height from the bottom of the sky section. We added this
    // in the css file. Feel free to move all styling to the JS file if you prefer to keep the
    // the '10' consistent.
    balloon.style.bottom = 10 + incrementer * 0.1 + '%'

    cloudOne.style.bottom = 40 + incrementer * 0.12 + '%'
    cloudOne.style.left = 75 + incrementer * 0.1 + '%'
    cloudTwo.style.bottom = 80 + incrementer * 0.14 + '%'
    cloudTwo.style.left = 70 + incrementer * 0.15 + '%'
    cloudThree.style.bottom = 60 + incrementer * 0.1 + '%'
    cloudThree.style.left = 0 + incrementer * -0.12 + '%'
    cloudFour.style.bottom = 70 + incrementer * 0.16 + '%'
    cloudFour.style.left = 20 + incrementer * -0.15 + '%'
    cloudFive.style.bottom = 60 + incrementer * 0.2 + '%'
    cloudFive.style.left = 60 + incrementer * 0.16 + '%'
}

window.addEventListener('scroll', move)

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY < 100;
    header.style.backgroundColor = scrollPosition ? 'transparent' : '#fff';

});

const searchIcon = document.querySelector('.search-icon');
const searchInput = document.querySelector('.search-input');

searchIcon.addEventListener('click', () => {
    searchInput.classList.toggle('active');
});
