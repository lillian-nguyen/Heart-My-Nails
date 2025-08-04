// make serviceName colors change onclick (for active class)
const serviceButtons = document.querySelectorAll('.serviceName');
serviceButtons.forEach(button => button.addEventListener('click', loadServices))

const serviceCategories = document.querySelectorAll('.service-category');

//hide all service categories
function hideAllCategories(){
    serviceCategories.forEach(category => {
       if (category.classList.contains('is-visible')){
        category.classList.remove('is-visible');
        setTimeout(() => {
            category.style.display = 'none';
        }, 500);
       } else {
        category.style.display = 'none';
       }        
    });
}

function loadServices(event){

    const currentActiveButton = document.querySelector('.activeService');
    if (currentActiveButton){
        currentActiveButton.classList.remove('activeService')
    };
    
    event.target.classList.add('activeService');

    hideAllCategories();

    let targetCategoryId;
    switch (event.target.id) {
        case 'manicures':
            targetCategoryId = 'manicureContainer';
            break;
        case 'pedicures':
            targetCategoryId = 'pedicureContainer';
            break;
        case 'nailEnhancements':
            targetCategoryId = 'enhancementsContainer';
            break;
        case 'waxingServices':
            targetCategoryId = 'waxingContainer';
            break;
        case 'additionalServices':
            targetCategoryId = 'additionalContainer';
            break;
        default:
            console.warn('Clicked button has an unhandled ID:')    
}

const targetCategoryElement = document.getElementById(targetCategoryId);
if (targetCategoryElement) {
    setTimeout(() => {
        targetCategoryElement.style.display = 'block';
        targetCategoryElement.offsetWidth;
        targetCategoryElement.classList.add('is-visible');
    }, 500)
}
}

// This runs once the entire HTML document is loaded
document.addEventListener('DOMContentLoaded', () => {
    serviceCategories.forEach(category => {
        category.style.display = 'none';
        category.classList.remove('is-visible');
    })

    const manicuresButton = document.getElementById('manicures');
    const manicureContainer = document.getElementById('manicureContainer');

    if (manicuresButton) {
        manicuresButton.classList.add('activeService');
    }
    if (manicureContainer) {
        manicureContainer.style.display = 'block';
        manicureContainer.offsetWidth;
        manicureContainer.classList.add('is-visible');
    }
});

// carousel effect for welcome images 
const rotatingImages = [
    '/assets/nailsBehindHead.jpg',
    '/assets/blueDressNails.jpg',
    '/assets/mauveNails.jpg',
    '/assets/salmonbg.jpg'
];

let index = 0;
const carouselImage = document.getElementById('carouselImage');

// set initial img & trigger fade-in
carouselImage.src = rotatingImages[index];
carouselImage.classList.add('fade-in');

setInterval(() => {

    carouselImage.classList.remove('fade-in');

    // index = (index + 1) % rotatingImages.length;
    // carouselImage.src = rotatingImages[index];

    setTimeout(() => {
        index = (index + 1) % rotatingImages.length;
        carouselImage.src = rotatingImages[index];

        carouselImage.classList.add('fade-in');
    }, 1000);
}, 2500);

// mobile navigation menu - expands / contracts after clicking hamburger menu
const hamburgerMenu = document.getElementById('hamburger');
const expandedNav = document.getElementById('expandedNav');
let navOpen = false;

hamburgerMenu.addEventListener('click', () => {
    navOpen = !navOpen;
    expandedNav.classList.toggle('open', navOpen);
})


// make expanded menu links change color onclick 

let expandedLinks = document.querySelectorAll('.expandedLink');
expandedLinks.forEach(link => link.addEventListener('click', revertColorCloseMenu));

function revertColorCloseMenu(event){
    event.target.classList.add('activeExpandedLink');
    setTimeout(() => {
        event.target.classList.remove('activeEspandedLink');
        event.target.style.color = 'black';
        expandedNav.classList.remove('open');
        navOpen = false;
    }, 300);
}