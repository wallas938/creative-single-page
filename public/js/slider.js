const sources = document.querySelectorAll('.guidelines__images > picture > source');
const img = document.querySelector('.guidelines__images > picture > img');
const imagesSrc = ['image-slide-1.jpg', 'image-slide-2.jpg', 'image-slide-3.jpg'];
const prevBtn = document.querySelector('#btn-prev');
const nextBtn = document.querySelector('#btn-next');

let currentImg = 0;
prevBtn.addEventListener('click', function () {
    if (currentImg === 0) {
        currentImg = 2;
        changeImage();
    } else {
        currentImg--;
        changeImage();
    }
});

nextBtn.addEventListener('click', function () {
    if (currentImg === 2) {
        currentImg = 0;
        changeImage();
    } else {
        currentImg++;
        changeImage();
    }
});

function changeImage() {
    sources.forEach(source => {
        let srcset = source.getAttribute('srcset');
        const indexOfSecondSlash = srcset.lastIndexOf('/') + 1;
        const toReplace = srcset.substring(indexOfSecondSlash);
        source.setAttribute('srcset', srcset.replace(toReplace, imagesSrc[currentImg]));
        img.setAttribute('src', srcset.replace(toReplace, imagesSrc[currentImg]));
    })
};