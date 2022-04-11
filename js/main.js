// Hamburger Open and Close
document.getElementById('menu-trigger').addEventListener('click', sideMenuAppears);
document.getElementById('menu-close').addEventListener('click', sideMenuDisappears);

function sideMenuAppears() {
    // console.log('sideMenuAppears() is active'); - if you want to test the function, uncomment this
    document.getElementById('side-menu').classList.add('show-menu');
}

/* When you click menu close, it puts the hide-menu class onto #side-menu, reversing what just happened */
function sideMenuDisappears() {
    // console.log('sideMenuDisappears() is active'); - if you want to test the function, uncomment this
    document.getElementById('side-menu').classList.remove('show-menu');
}


console.log("hi");

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

//Automatic Slideshow
// let slideIndex = 0;
// showSlides();

// function showSlides() {
//     let i;
//     let slides = document.getElementsByClassName("carousel-card");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) { slideIndex = 1 }
//     slides[slideIndex - 1].style.display = "block";
//     setTimeout(showSlides, 5000);
// }


// Activity Options by Region

const regions = ["All", "Columbia River", "Mt. Hood", "Mt. Rainier", "Oregon Coast", "Portland", "Seattle"];
const regionSelect = document.querySelector(".activity-option-dropdown");

regions.forEach(function (region) {
    let regionOption = document.createElement("option");

    regionOption.innerHTML = region;

    regionSelect.appendChild(regionOption);
})



regionSelect.addEventListener("change", function () {
    let regionChoice = regionSelect.value;

    if (regionChoice === regions[0]) {
        const locationArray = document.getElementsByClassName("location-card");

        for (let i = 0; i < locationArray.length; i++) {
            locationArray[i].classList.remove('hide');
        }
    }
    else if (regionChoice === regions[1]) {
        const locationArray = document.getElementsByClassName("location-card");
        const columbiaRiverArray = document.getElementsByClassName("columbia-river");

        for (let i = 0; i < locationArray.length; i++) {
            locationArray[i].classList.add('hide');
        }
        for (let i = 0; i < columbiaRiverArray.length; i++) {
            columbiaRiverArray[i].classList.remove('hide');
        }
    }
    else if (regionChoice === regions[2]) {
        const locationArray = document.getElementsByClassName("location-card");
        const mtHoodArray = document.getElementsByClassName("mt-hood");

        for (let i = 0; i < locationArray.length; i++) {
            locationArray[i].classList.add('hide');
        }
        for (let i = 0; i < mtHoodArray.length; i++) {
            mtHoodArray[i].classList.remove('hide');
        }
    }
    else if (regionChoice === regions[3]) {
        const locationArray = document.getElementsByClassName("location-card");
        const mtRainierArray = document.getElementsByClassName("mt-rainier");

        for (let i = 0; i < locationArray.length; i++) {
            locationArray[i].classList.add('hide');
        }
        for (let i = 0; i < mtRainierArray.length; i++) {
            mtRainierArray[i].classList.remove('hide');
        }
    }
    else if (regionChoice === regions[4]) {
        const locationArray = document.getElementsByClassName("location-card");
        const oregonCoastArray = document.getElementsByClassName("oregon-coast");

        for (let i = 0; i < locationArray.length; i++) {
            locationArray[i].classList.add('hide');
        }
        for (let i = 0; i < oregonCoastArray.length; i++) {
            oregonCoastArray[i].classList.remove('hide');
        }
    }
    else if (regionChoice === regions[5]) {
        const locationArray = document.getElementsByClassName("location-card");
        const portlandArray = document.getElementsByClassName("portland");

        for (let i = 0; i < locationArray.length; i++) {
            locationArray[i].classList.add('hide');
        }
        for (let i = 0; i < portlandArray.length; i++) {
            portlandArray[i].classList.remove('hide');
        }
    }
    else if (regionChoice === regions[6]) {
        const locationArray = document.getElementsByClassName("location-card");
        const seattleArray = document.getElementsByClassName("seattle");

        for (let i = 0; i < locationArray.length; i++) {
            locationArray[i].classList.add('hide');
        }
        for (let i = 0; i < seattleArray.length; i++) {
            seattleArray[i].classList.remove('hide');
        }

    }
})

