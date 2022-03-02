let menu = document.querySelector(".responsive-menu");
let btn = document.querySelectorAll(".menu-bar-responsive")
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function() {
        menu.classList.toggle("show");
    })

}