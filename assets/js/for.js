//----- javaScript para for----//

//variables de HTML
const c1 = document.querySelectorAll('#Color1');
const c2 = document.querySelectorAll('#Color2');

function cambioColores (){   

    //Recorrer la lista de valores con for
    for (let i=0; i< c1.length && c2.length ; i++){
        
        // Cambiar colores segun necesidad 
        if (c1[i].className == 'color1'){
            c1[i].className = 'color2';
            c2[i].className = 'color1';
            console.log('Opcion Color principal');
            
        } else {
            c1[i].className = 'color1';
            c2[i].className = 'color2';
            console.log('Opcion Color secundaria');
        }
    }

}


