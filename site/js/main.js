function doStuff(event){
    let klick = document.querySelector("ul")
    let shadow = document.querySelector(".shadow")
    let menu = document.querySelector(".menu")
    klick.classList.toggle("ul-activate")
    shadow.classList.toggle("shadow-activate")
    menu.classList.toggle("menu-activate")
}