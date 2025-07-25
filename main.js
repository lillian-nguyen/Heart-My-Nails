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
    '/assets/blueDressNails.jpg'
];

let index = 0;
const carouselImage = document.getElementById('carouselImage');

setInterval(() => {

    index = (index + 1) % rotatingImages.length;
    carouselImage.src = rotatingImages[index];
}, 3000);