function doStuff(event){
    let klick = document.querySelector("ul")
    let shadow = document.querySelector(".shadow")
    let menu = document.querySelector(".menu")
    let box1 = document.querySelector(".box1")
    let box2 = document.querySelector(".box2")
    let box3 = document.querySelector(".box3")
    klick.classList.toggle("ul-activate")
    shadow.classList.toggle("shadow-activate")
    menu.classList.toggle("menu-activate")
    box1.classList.toggle("box-active")
    box2.classList.toggle("box-active")
    box3.classList.toggle("box-active")
}