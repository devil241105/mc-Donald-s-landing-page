function toggleMenu() {
    const navbarLinks = document.getElementById('navbarLinks');
    navbarLinks.classList.toggle('active');
}

var loader = document.getElementById("preloader");
window.addEventListener("load", function() {
    setTimeout(function() {
        loader.style.display = "none";
    }, 3000);
});