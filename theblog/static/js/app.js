const details = document.querySelector('.details');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const hamburger = document.querySelector('.hamburger');
const headline = document.querySelector('.headline');
const modal = document.querySelector('.modal');
const MiniGallerySet = document.querySelectorAll('.MiniGalleryDiv img');
const original = document.querySelector('.full-img');
//const hamburger = document.querySelector('.hamburger');
const navUlMenu = document.querySelector('.navUlMenu');
const navLiMenu = document.querySelectorAll('.navUlMenu li');





const tl  = new TimelineMax();

tl.fromTo(details,3,{height: "0%"},{height:'100%' ,ease: Power2.easeInOut })
//.fromTo(details,1,{width: "100%"},{width:"95%"})
.fromTo(logo,4,{opacity:0, x:30},{opacity:1,x: 0}, "-=4")
.fromTo(headline,4,{opacity:0},{opacity:0.9})

MiniGallerySet.forEach((MiniGallerySet) => {
    MiniGallerySet.addEventListener('click', () => {
        modal.classList.add("open");
        original.classList.add("open");

        const originalSrc = MiniGallerySet.getAttribute("data-original");
        original.src = `./MiniGalleriSetOrigin/${originalSrc}`;
    })
})

modal.addEventListener('click', (e) => {
    if(e.target.classList.contains('modal')){
        modal.classList.remove("open");
        original.classList.remove("open");
    }
});

hamburger.addEventListener('click', () => {
    navUlMenu.classList.toggle("open");
});