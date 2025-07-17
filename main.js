// make serviceName colors change onclick 
let serviceButtons = document.querySelectorAll('.serviceName');
serviceButtons.forEach(button => button.addEventListener('click', redirectServices))

function redirectServices(event){
    event.target.classList.add('clickedServiceButton')
    setTimeout(() => {
        event.target.classList.remove('clickedServiceButton');
    }, 1000)

    // route to the appropriate service section
}

// carousel effect for welcome images 