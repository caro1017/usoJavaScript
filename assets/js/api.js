//----- javaScript para la API ----//

function alertaApi(){
    alert('Digita ciudad que deseas saber el clima')
}

//Variable solicitar info api desde un boton
const send = document.querySelector('#send');
//variable creacion DOM section info de la api
const clima = document.querySelector('#clima');

//llamado del boton a la api
send.addEventListener('click', queryWather);

// Funcion para llamar la api usande metodo GET
function queryWather (e){
    e.preventDefault();
    const city = document.querySelector('#city').value; 
    // uso de RUTA RELATIVA para llamar a la API
    // se utiliza las comiillas invertidas para poder llamar a la ciudad que digita el usuario
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8684198c2eb23343d85874dac76f1006&units=metric`;
    method:'GET' // uso del metodo Get

    const weather = fetch (url)
                        .then(res => res.json())
                        .then(data => showIntoDOM(data))
}

// Funcion para crear la solicitud de la API
function showIntoDOM(data){
    //llamado de la funcion para limpiar el HTML cada que le damos click
    clearHTML()
    // variable con la url del icono segun clima
    const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    // variable solicitar informacion segun lo que requiero mostar en pantalla 
    const { main:{temp,humidity}, weather:[{description}]} = data;

    /* Creacion de section para infrormacion html */
    const city = document.querySelector('#city').value;
    const celsius = document.createElement('p');
    const icono = document.createElement('img');
    const humedad = document.createElement('h3');
    const ciudad = document.createElement('h2');
    const estado = document.createElement('h4');

    /* llamado de las variables creadas */
    icono.src = iconUrl;
    ciudad.textContent = `${city}`    
    celsius.textContent = `${Math.ceil(temp)}°C`
    humedad.textContent = `Humedad ${humidity} %`
    estado.textContent = `${description}`

    /* ubicacion de las variables HTML e integracion */
    clima.appendChild(celsius)
    clima.appendChild(ciudad)
    clima.appendChild(humedad)
    clima.appendChild(icono)  
    clima.appendChild(estado)

    /* Imprimir resultado en consola */
    console.log(city,celsius, icono, humedad,ciudad,estado);

}

//Funcion para limpiar el HTML cada que le damos click
function clearHTML(){
    clima.innerHTML = '';
}
