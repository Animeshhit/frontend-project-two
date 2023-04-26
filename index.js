// For Navbar 

const MenuBtn = document.getElementById("menu_button")
const NavbarContainer = document.querySelector(".nav_container");

MenuBtn.addEventListener("click",() => {
    NavbarContainer.classList.toggle("nav-open");
})