//----- javaScript para las librerias----//

/* Animacion libreria anime */
const rotacion = anime({
    targets: '.contenedor',
    rotate: '1turn',
    autoplay: false
});

document.querySelector('.btn_rotar').onclick = rotacion.restart;

/* Animacion libreria greensock */

var tl = gsap.timeline();
tl.to(".box_1", {duration: 20, x: 300}) 
.to(".box_2", {duration: 1, y: -100})
.to(".box_3", {duration: 3, rotation: 360});







