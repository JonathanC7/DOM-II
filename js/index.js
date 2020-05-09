// Your code goes here

// Navigation Bar
let navBar = document.querySelector('.nav-container');
navBar.addEventListener('dblclick', () => {
    navBar.style.background = 'gold';
})

// Navigation Links
let navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('mouseenter', event => {
        event.target.style.color = '#17A2B8';
    })
})
navLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
    })
})
navLinks.forEach(link => {
    link.addEventListener('mouseleave', event => {
        event.target.style.color = 'black';
    })
})

// Images
let images = document.querySelectorAll('img');
images.forEach((image) => {
    image.addEventListener('mouseover', (change) => {
        change.target.style.transform = 'scale(1.05)';
        change.target.style.transition = 'all 0.3s';
    })
})
images.forEach((image) => {
    image.addEventListener('mouseleave', (change) => {
        change.target.style.transform = 'initial';
    })
})
// Window
window.addEventListener('scroll', () => {
    images[1].setAttribute('src', 'img/fun.jpg');
    images[2].setAttribute('src', 'img/adventure.jpg');
})

window.addEventListener('resize', () => {
    images[0].setAttribute('src', 'img/destination.jpg');
    images[3].setAttribute('src', 'img/fun-bus.jpg')
})

let allP = document.querySelectorAll('p');
window.addEventListener('click', () => {
    allP[1].style.color = 'pink';
    stopPropagation();    
})

// Document
let logo = document.querySelector('.logo-heading');
document.addEventListener('keydown', () => {
    logo.style.color = 'white';
})
document.addEventListener('keyup', () => {
    logo.style.color = 'black';
})

document.body.addEventListener('click', () => {
    document.body.style.background = 'coral'
})

// Miscellaneous
let welcome = document.querySelector('.intro h2');
welcome.addEventListener('click', (event) => {
    welcome.style.color = 'lightgreen';
    event.stopPropagation();
})

