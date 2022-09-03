const toggler = document.querySelector(".navbar-toggler");
const menu = document.querySelector("nav ul");
const body= document.querySelector("body");
toggler.onclick = ()=>{
    toggler.classList.toggle("activenav")
    menu.classList.toggle("showmenu")
    body.classList.toggle("bodyheight")
}


