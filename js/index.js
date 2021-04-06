const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
//console.log(logo);
//Update Img src for logo???


//Nav
const navBar = document.querySelectorAll('nav > a'); //Access Nav
//Adding content to the page
navBar[0].textContent = siteContent.nav['nav-item-1'];
navBar[1].textContent = siteContent.nav['nav-item-2'];
navBar[2].textContent = siteContent.nav['nav-item-3'];
navBar[3].textContent = siteContent.nav['nav-item-4'];
navBar[4].textContent = siteContent.nav['nav-item-5'];
navBar[5].textContent = siteContent.nav['nav-item-6'];

navBar.forEach(item => item.style.color = 'green'); //Nav color to green
console.log(navBar);


//CTA
const ctaSection = document.querySelector('.cta');
//console.log(ctaSection);

const ctaText = ctaSection.querySelector('.cta-text');
//const ctaTitle = ctaText.querySelectorAll('h1');
const ctaTitle = ctaText.querySelector('h1');
const ctaButton = ctaText.querySelector('button');
const ctaImage = ctaSection.querySelector('#cta-img');

ctaTitle.textContent = siteContent.cta['h1']; //Add title to page
ctaButton.textContent = siteContent.cta['button'];
ctaImage.src = "img/header-img.png";


//Main Content
const mainContent = document.querySelector('.main-content'); //Access section

const mainContentTitle = mainContent.querySelectorAll('.text-content')
mainContentTitle.forEach((item, i) => {
  let titleContent = [
    siteContent['main-content']['features-h4'],
    siteContent['main-content']['about-h4'],
    siteContent['main-content']['services-h4'],
    siteContent['main-content']['product-h4'],
    siteContent['main-content']['vision-h4'],
  ]
  item.textContent = titleContent[i]
})

const middleImage = mainContent.querySelector('#middle-img');
middleImage.src = "img/mid-page-accent.jpg";

const mainContentText = mainContent.querySelectorAll('.text-content')
mainContentText.forEach((item, i) => {
  let content = [
    siteContent['main-content']['features-content'],
    siteContent['main-content']['about-content'],
    siteContent['main-content']['services-content'],
    siteContent['main-content']['product-content'],
    siteContent['main-content']['vision-content'],
  ]
  item.textContent = content[i]
})
//console.log(mainContent);



//Contact
const contactSection = document.querySelector('.contact');
//console.log(contactSection);

const contactTitle = contactSection.querySelector('contact-h4');
contactTitle.textContent = siteContent.contact['contact-h4'];

const addressContact = contactSection.querySelector('address');
addressContact.textContent = siteContent.contact['address'];

const phoneContact = contactSection.querySelector('phone');
phoneContact.textContent = siteContent.contact['phone'];

const emailContact = contactSection.querySelector('email');
emailContact.textContent = siteContent.contact['email'];




//Footer
const footerContent = document.querySelector('.footer');
footerContent.textContent = siteContent.footer['copyright'];



/* 

Fix:
1. Titles in Main Content
2. Contact section
3. Footer section

Still need to add:

.appendChild()
.prepend()

*/


