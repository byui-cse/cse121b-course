// toggle menu in small view
const toggleMenu = () => {
    document.querySelector('#menu').classList.toggle('open');
}


// set current year in footer
const currentDate = new Date();
document.querySelector('#year').textContent = currentDate.getFullYear();
