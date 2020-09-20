const details = document.querySelector('.details');
const headline = document.querySelector('.headline');

const tl  = new TimelineMax();

tl.fromTo(details,3,{width: "0%"},{width:'100%' ,ease: Power2.easeInOut })
.fromTo(headline,2,{opacity:0},{opacity:0.9})

