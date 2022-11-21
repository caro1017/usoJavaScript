//----- javaScript para while---//

//Alert para indicar las reglas del juego
function reglas(){
    alert('Adivina el numero del 1 - 5');
}

// Detectar el boton 
document.getElementById('boton').onclick = function(){   

    //Guardar el numero que ingrese el usuario en una variable
    let usuario = document.getElementById('numeroCiclos').value;
    console.log(usuario);
    //una variable de repeticiones donde vamos a mostrar al usuario la interaccion con el DOM
    let repeticiones = 1;
    let cantidad = 5;
    let detener = false;

    //Uso del while para interactuar con el usuario
    while(repeticiones <= usuario && detener == false ){
        clearHTML();

        if (usuario == cantidad){
            // Imagen DOM indica que adivino el numero
            const img2 = 'https://img.freepik.com/vector-gratis/gran-bandera-sorpresa-ganar-estilo-comico_1017-17792.jpg?w=740&t=st=1668965811~exp=1668966411~hmac=2c94d867533f5582fa8d41b2c722da9c9a27706a6bee84b10ec8cba7030d3b3b'
            const icono = document.createElement('img');
            icono.src=img2;

            document.getElementById('resultado').icono ;
            resultado.appendChild(icono);
            detener= true;
            console.log('! GANASTE !');

        }  else {
            // Imagen DOM indica que NO adivino el numero
            const img1 = 'https://img.freepik.com/vector-gratis/opps-redaccion-bocadillo-dialogo-comico-estilo-pop-art_1150-39953.jpg?w=1060&t=st=1668965975~exp=1668966575~hmac=f05afd64f3a000687618ea65c71dc8055c59df053ee3898396e69332904d7fa7'
            const icono = document.createElement('img');
            icono.src=img1;

            document.getElementById('resultado').icono ;
            resultado.appendChild(icono)

            repeticiones ++; 
            console.log('PERDISTE');
        }
    }
}

//Funcion para limpiar el HTML cada que le damos click
function clearHTML(){
    resultado.innerHTML = '';
}



