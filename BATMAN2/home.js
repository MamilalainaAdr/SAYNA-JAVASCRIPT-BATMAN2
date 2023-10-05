//RETOUR EN HAUT/ EN BAS DE LA PAGE
let enHaut = document.getElementsByClassName ('bat1')
let enBas = document.getElementsByClassName ('bat2');
enHaut.addEventListener ("click", scrollTo3)
enBas.addEventListener ("click", scrollTo4);

function scrollTo3(){
    const encre = document.getElementById ("accueil");
    encre.scrollIntoView ({behavior: 'smooth'})
}

function scrollTo4(){
    const encre = document.getElementById ("contact");
    encre.scrollIntoView ({behavior: 'smooth'})
}
//VOIR LES HEROS/ VOIR LES ADVERSAIRES
let hero = document.getElementById ('heros')
let adv = document.getElementById ('adversaires');
hero.addEventListener ("click", scrollTo1)
adv.addEventListener ("click", scrollTo2);

function scrollTo1(){
    const encre = document.getElementById ("cinema");
    encre.scrollIntoView ({behavior: 'smooth'})
}

function scrollTo2(){
    const encre = document.getElementById ("nemesis");
    encre.scrollIntoView ({behavior: 'smooth'})
}

//CURSEUR
let canvas = document.getElementById('canvas');
let c = canvas.getContext ('2d');
let img = new Image();
img.src = 'icones/logohome.png'

let bat = {
    positions: [],
    draw(){
        c.drawImage (img, 0, 0, 50, 20)
    }
}
window.addEventListener ("mousemove", deplacement);
function deplacement (event){
    canvas.style.top = event.clientY+ window.scrollY + 20 + "px" ;
    canvas.style.left = event.clientX + window.scrollX + 20 + "px";
}
img.onload = bat.draw();

//PERSONNAGES
let image = document.querySelectorAll ('.batbat')

image.forEach(function (element){
    element.addEventListener ("mouseover", function (){
        element.querySelector (".identite").style.display = "flex"
        element.style.transform = "scale (1.1)"
    })
    element.addEventListener ("mouseout", function (){
        element.querySelector (".identite").style.display = "none"
        element.style.transform = "scale (1)"
    })

})