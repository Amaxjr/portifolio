let jmMenu = document.getElementById("jm-social")
let menu = document.getElementById("menu-mobile")


jmMenu.addEventListener("click",()=>{
    menu.classList.add("abrir-menu")
})
menu.addEventListener("click",()=>{
    menu.classList.remove("abrir-menu")
})