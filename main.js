// make serviceName colors change onclick (for active class)
const serviceButtons = document.querySelectorAll('.serviceName');
serviceButtons.forEach(button => button.addEventListener('click', loadServices))

const serviceCategories = document.querySelectorAll('.service-category');

//hide all service categories
function hideAllCategories(){
    serviceCategories.forEach(category => {
        category.style.display = 'none';
    })
}

function loadServices(event){

    let currentActiveElement = document.querySelector('.activeService');

    if (currentActiveElement){
        currentActiveElement.classList.remove('activeService')
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
    targetCategoryElement.style.display = 'block';
}
}

// This runs once the entire HTML document is loaded
document.addEventListener('DOMContentLoaded', () => {
    // 1. Hide all service categories by default
    hideAllCategories();

    // 2. Find the 'Manicures' button and its corresponding category
    const manicuresButton = document.getElementById('manicures');
    const manicureContainer = document.getElementById('manicureContainer');

    // 3. If they exist, set the 'Manicures' button as active and show its container
    if (manicuresButton) {
        manicuresButton.classList.add('activeService');
    }
    if (manicureContainer) {
        manicureContainer.style.display = 'block';
    }
});

// set initial state: Manicure category loaded
document.addEventListener('DOMContentLoaded', (event) => {
    hideAllCategories();

   const manicuresButton = document.getElementById('manicures');
   const manicureContainer = document.getElementById('manicureContainer');

   if(manicuresButton){
    manicuresButton.classList.add('activeService');
   }

   if(manicureContainer){
    manicureContainer.style.display = 'block';
   }
})

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