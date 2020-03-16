const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener('click', function(e) {
        anchors.forEach(el => {
            if (el.classList.contains('active')) { el.classList.remove("active"); }
        })
        anchor.classList.add("active");
        e.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

const bg = document.getElementsByClassName('section-slider');
const next = document.getElementsByClassName('next');
next[0].addEventListener('click', function(e) {
    changeBGColor();
})

const prev = document.getElementsByClassName('prev');
prev[0].addEventListener('click', function(e) {
    changeBGColor();
})

function changeBGColor() {
    if (bg[0].classList.contains('pink')) {
        bg[0].classList.remove('pink');
        bg[0].classList.add('blue');
    } else {
        bg[0].classList.remove('blue');
        bg[0].classList.add('pink');
    }
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("item");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

let phoneVer = document.getElementsByClassName('phone-vertical');
phoneVer[0].addEventListener('click', function(e) {
     phoneVer[0].src == "file:///C:/Users/user/Desktop/singolo/assets/images/phone-vertical.png" || 
      phoneVer[0].src == "https://alexandra789.github.io/singolo/assets/images/phone-vertical.png" ?
        phoneVer[0].src = "./assets/images/phone-vertical-off.png" : phoneVer[0].src = "./assets/images/phone-vertical.png";
})

let phoneHoriz = document.getElementsByClassName('phone-horizontal');
phoneHoriz[0].addEventListener('click', function(e) {
    phoneHoriz[0].src == "file:///C:/Users/user/Desktop/singolo/assets/images/phone-horizontal.png" ||
        phoneHoriz[0].src == "https://alexandra789.github.io/singolo/assets/images/phone-horizontal.png" ?
        phoneHoriz[0].src = "./assets/images/phone-horizontal-off.png" : phoneHoriz[0].src = "./assets/images/phone-horizontal.png";
})

function loadImages(imagesArr) {
    const imagesArea = document.querySelector('.portfolio-images');
    let images = '';
    imagesArr.forEach(srcImg => {
        images += `<img class="image-item-portfolio-section" src=${srcImg} alt="image"/>`
    });
    imagesArea.innerHTML = images;
}

let imagesArr = [
    './assets/images/portfolio1.png',
    './assets/images/portfolio2.png',
    './assets/images/portfolio3.png',
    './assets/images/portfolio4.png',
    './assets/images/portfolio5.png',
    './assets/images/portfolio6.png',
    './assets/images/portfolio7.png',
    './assets/images/portfolio8.png',
    './assets/images/portfolio9.png',
    './assets/images/portfolio10.png',
    './assets/images/portfolio11.png',
    './assets/images/portfolio12.png',
];

loadImages(imagesArr);

const portfolioButtons = document.querySelectorAll('.portfolio-image__button');
for (let portfolioButton of portfolioButtons) {
    portfolioButton.addEventListener('click', function(e) {
        portfolioButtons.forEach(el => {
            if (el.classList.contains('active-btn')) { el.classList.remove("active-btn"); }
        })
        portfolioButton.classList.add("active-btn");
        e.preventDefault();
        imagesArr = shuffle(imagesArr);
        loadImages(imagesArr);
    })
}

function shuffle(array) {
    let currentIndex = array.length,
        temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

const images = document.querySelectorAll('.image-item-portfolio-section')
for (let image of images) {
    image.addEventListener('click', function(e) {
        images.forEach(el => {
            if (el.classList.contains('active-img')) { el.classList.remove("active-img"); }
        })
        image.classList.add("active-img");
        e.preventDefault();

    })
}

const button = document.getElementsByClassName('submit');
const title = document.getElementsByClassName('input-name');
const email = document.getElementsByClassName('email');
const subject = document.getElementsByClassName('subject');
const description = document.getElementsByClassName('description-txt');

button[0].addEventListener('click', function(e) {
    console.log(description[0]);
    if (title[0].value != '' && email[0].value != '') {
        if (subject[0].value == '' && description[0].value == '') {
            alert('Письмо отправлено\nБез темы\nБез описания\nОК');
        } else if (subject[0].value == '') {
            alert('Письмо отправленo\n' + 'Без темы\nОписание: ' +
                description[0].value + '\nOK')
        } else if (description[0].value == '') {
            alert('Письмо отправленo\n' + 'Тема: ' +
                subject[0].value + '\nБез описания\nOK')
        } else {
            alert('Письмо отправленo\n' + 'Тема: ' +
                subject[0].value + '\nОписание: ' +
                description[0].value + '\nOK');
        }
    }
})
