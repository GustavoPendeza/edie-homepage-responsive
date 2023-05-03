const btnMobile = document.getElementById("btn-mobile");
const homeMenu = document.getElementById("homeMenu");
const servicesMenu = document.getElementById("servicesMenu");
const ourWorksMenu = document.getElementById("ourWorksMenu");
const clientsMenu = document.getElementById("clientsMenu");
const contactMenu = document.getElementById("contactMenu");

function toggleMenu(event) {
    if (event.type === "touchstart") event.preventDefault();
    const nav = document.getElementById("nav");

    nav.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

homeMenu.addEventListener("click", toggleMenu);
homeMenu.addEventListener("touchstart", toggleMenu);
servicesMenu.addEventListener("click", toggleMenu);
servicesMenu.addEventListener("touchstart", toggleMenu);
ourWorksMenu.addEventListener("click", toggleMenu);
ourWorksMenu.addEventListener("touchstart", toggleMenu);
clientsMenu.addEventListener("click", toggleMenu);
clientsMenu.addEventListener("touchstart", toggleMenu);
contactMenu.addEventListener("click", toggleMenu);
contactMenu.addEventListener("touchstart", toggleMenu);
