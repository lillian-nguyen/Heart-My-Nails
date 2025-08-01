// make serviceName colors change onclick 
let serviceButtons = document.querySelectorAll('.serviceName');
serviceButtons.forEach(button => button.addEventListener('click', redirectServices))

//revert back to original button color
function redirectServices(event){
    event.target.classList.add('clickedServiceButton')
    setTimeout(() => {
        event.target.classList.remove('clickedServiceButton');
    }, 1000)
}

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