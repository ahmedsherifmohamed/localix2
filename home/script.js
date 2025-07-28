const featuresbtn=document.querySelector('.featuresbtn');
const features=document.querySelector('.features');
const pricingbtn=document.querySelector('.pricingbtn');
const pricing=document.querySelector('.pricing');

document.addEventListener('DOMContentLoaded', () => {
    const featuresbtn = document.querySelector('.featuresbtn');
    const features = document.querySelector('.features');
    const pricingbtn = document.querySelector('.pricingbtn');
    const pricing = document.querySelector('.pricing');

    if (featuresbtn && features) {
        featuresbtn.addEventListener('click', () => {
            features.scrollIntoView({ behavior: 'smooth' });
        });
    }
    if (pricingbtn && pricing) {
        pricingbtn.addEventListener('click', () => {
            pricing.scrollIntoView({ behavior: 'smooth' });
        });
    }
});
const demoButton = document.querySelector('.demo');
const demoSection = document.querySelector('.demosection');
const closeButton = demoSection.querySelector('button');
demoButton.addEventListener('click', () => {
    demoSection.style.display = 'flex';
});
closeButton.addEventListener('click', () => {
    demoSection.style.display = 'none';
    const video = demoSection.querySelector('video');
    if (video) {
        video.pause();
        video.currentTime = 0;
    }
});
