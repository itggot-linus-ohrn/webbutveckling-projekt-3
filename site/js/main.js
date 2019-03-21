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

function prod1(event){
    let prod1 = document.querySelector(".prod1")

    prod1.classList.toggle("prod-active")

}

function prod2(event){

    let prod2 = document.querySelector(".prod2")

    prod2.classList.toggle("prod-active")

}

function prod3(event){

    let prod3 = document.querySelector(".prod3")

    prod3.classList.toggle("prod-active")

}

function prod4(event){

    let prod4 = document.querySelector(".prod4")

    prod4.classList.toggle("prod-active")
}