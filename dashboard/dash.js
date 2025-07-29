const menu = document.querySelector('.menu');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close');
const sidebarLinks = document.querySelectorAll('.sidebar ul li div');

// Use classes instead of inline styles
menu.addEventListener('click', () => {
    sidebar.classList.add('open');
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('open');
});

// Refactored click handler
sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Find the currently selected item and remove the class
        const currentSelected = document.querySelector('.sidebar ul li div.selected');
        if (currentSelected) {
            currentSelected.classList.remove('selected');
        }
        // Add the class to the clicked item
        link.classList.add('selected');
    });
});