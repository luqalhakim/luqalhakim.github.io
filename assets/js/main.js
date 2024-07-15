// Show Menu
const navMenu = document.getElementById('nav-menu'),
    navToogle = document.getElementById('nav-toogle'),
    navClose = document.getElementById('nav-close')

// Menu Show
// Validate if constant exists
if(navToogle) {
    navToogle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// Remove Menu Mobile
const navLink = document.querySelectorAll('.nav_link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav_link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// Add Blur to Header
const blurHeader = () => {
    const header = document.getElementById('header');
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    window.scrollY >= 50 ? header.classList.add('blur-header')
                         : header.classList.remove('blur-header');
}
window.addEventListener('scroll', blurHeader);

// Email JS
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_105f4v3', 'template_ypfkhgj', '#contact-form', 'RUEXJW2v3DcEe0kXk')
        .then(() => {
            //Show sent message
            contactMessage.textContent = 'Message sent successfully ✅'

            // Remove message after five seconds
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)

            // Clear input fields
            contactForm.reset()

        }, () => {
            // Show error message
            contactMessage.textContent = 'Message not sent (service error) ❌'
        })
}

contactForm.addEventListener('submit', sendEmail)

// Show Scroll Up
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup
    window.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                         : scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

// Scroll Sections Active Link
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelectorAll('.nav_menu a[href*=' + sectionId + ']');

        sectionsClass.forEach(link => {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                link.classList.add('active-link');
            } else {
                link.classList.remove('active-link');
            }
        });
    });
};
window.addEventListener('scroll', scrollActive);


// Scroll Reveal Animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000, 
    delay: 400,
    reset: true // Animations repeat
})

sr.reveal(`.home_data, .home_social, .contact_container, .footer_container`)
sr.reveal(`.home_image`, {origin: 'bottom'})
sr.reveal(`.about_data, .skills_data`, {origin: 'left'})
sr.reveal(`.about_image, .skills_content`, {origin: 'left'})
sr.reveal(`.skills_data`, {origin: 'right'})
sr.reveal(`.skills_content`, {origin: 'right'})
sr.reveal(`.services_card, .projects_card`, {interval: 100})