document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.7
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});

document.querySelector(".menubtn").addEventListener("click",()=>{
    document.querySelector(".sidemenu").style.display="block"
})
document.querySelector(".close").addEventListener("click",()=>{
    document.querySelector(".sidemenu").style.display="none"

})
