function doStuff(event){
    let klick = document.querySelector("ul")
    let shadow = document.querySelector(".shadow")
    let menu = document.querySelectorAll(".menu")
    let header = document.querySelector(".header")
    klick.classList.toggle("ul-activate")
    shadow.classList.toggle("shadow-activate")
    for(i=0; i<menu.length; i++){
    menu[i].classList.toggle("menu" + i + "-activate")

    if (menu[i].innerHTML == "Menu"){
        menu[i].innerHTML = "Close"
    }else{
        menu[i].innerHTML = "Menu"
    }
}

    header.classList.toggle("header-active")
}