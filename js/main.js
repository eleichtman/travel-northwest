// Hamburger Open and Close
document.getElementById('menu-trigger').addEventListener('click', sideMenuAppears);
document.getElementById('menu-close').addEventListener('click', sideMenuDisappears);

function sideMenuAppears() {
    document.getElementById('side-menu').classList.add('show-menu');
}

function sideMenuDisappears() {
    document.getElementById('side-menu').classList.remove('show-menu');
}


// Slide carousel
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carousel-card");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}


// Activity Options by Region

const regions = ["All", "Columbia River", "Mt. Hood", "Mt. Rainier", "Oregon Coast", "Portland", "Seattle"];
const regionSelect = document.querySelector(".activity-option-dropdown");

regions.forEach(function (region) {
    let regionOption = document.createElement("option");

    regionOption.innerHTML = region;

    regionSelect.appendChild(regionOption);
})


function hideCards(regionId) {
    const locationArray = document.getElementsByClassName("location-card");
    const regionArray = document.getElementsByClassName(regionId);

    for (let i = 0; i < locationArray.length; i++) {
        locationArray[i].classList.add('hide');
    }
    for (let i = 0; i < regionArray.length; i++) {
        regionArray[i].classList.remove('hide');
    }

}

regionSelect.addEventListener("change", function () {
    let regionChoice = regionSelect.value;

    if (regionChoice === regions[0]) {
        const locationArray = document.getElementsByClassName("location-card");

        for (let i = 0; i < locationArray.length; i++) {
            locationArray[i].classList.remove('hide');
        }
    }
    else if (regionChoice === regions[1]) {

        hideCards("columbia-river");

    }
    else if (regionChoice === regions[2]) {

        hideCards("mt-hood");

    }
    else if (regionChoice === regions[3]) {

        hideCards("mt-rainier");

    }
    else if (regionChoice === regions[4]) {

        hideCards("oregon-coast");

    }
    else if (regionChoice === regions[5]) {

        hideCards("portland");

    }
    else if (regionChoice === regions[6]) {

        hideCards("seattle");

    }
})

