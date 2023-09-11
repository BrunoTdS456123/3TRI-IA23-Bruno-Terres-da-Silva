const btHamburguer = document.querySelector(".bt-hamburguer-toggle")
const mainMenu = document.querySelector("nav.main-menu")

btHamburguer.addEventListener("click", () => {
    btHamburguer.classList.toggle("opened")
    mainMenu.classList.toggle("opened")
})