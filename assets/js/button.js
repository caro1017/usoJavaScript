//----- javaScript para boton mostrar - ocultar----//

function toggle(idSection){
    const section = document.getElementById(idSection);
    if(section.classList[0] === 'ocultar'){
        section.classList.remove('ocultar')
        section.classList.add('mostrar')
    } else{
        section.classList.remove('mostrar')
        section.classList.add('ocultar')
    }
    
}

