//----- javaScript para switch----//

//Variable recibe la ruta de donde se va cambiar el color
const div = document.querySelector('#color')

// Funcion para cambiar el color fondo
function cambiarColor(color){
    //Switch segun color seleccionado cambia color fonodo
    switch(color){
        case 'white':
            div.style.backgroundColor = 'white';
            alert('Cambia color a Blanco')
            break;
        case 'lightblue':
            div.style.backgroundColor = 'lightblue';
            alert('Cambia color a Azul claro')
            break;
        case 'lightpink':
            div.style.backgroundColor = 'lightpink';
            alert('Cambia color a Rosado')
            break;
        default:
            alert('No es una seleccion de color')
            break;
    }
    
    // Imprimir por consola el color seleccionado
    console.log(color);
}

