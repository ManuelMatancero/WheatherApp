"use strict";

let country = document.getElementById('country');
let nombre = document.querySelector('.name');
let desc = document.querySelector('.desc');
let temp = document.querySelector('.temp')
let latitud;
let longitud;

function mostrar(){
    fetch('http://api.openweathermap.org/geo/1.0/direct?q='+country.value+'&appid=dcc5a740cc81bb084bc096ad6866dda6')
    .then(response => response.json())
    .then(data => {
        latitud = data['0']['lat'];
        longitud = data['0']['lon'];
        console.log(latitud+ ' ' + longitud);

        fetch('https://api.openweathermap.org/data/2.5/weather?lat='+latitud+'&lon='+longitud+'&appid=dcc5a740cc81bb084bc096ad6866dda6')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let nomValue = data['name'];
            let temValue = data['main']['temp'];
            let temperaturaCelcius = (temValue - 273.15);
            let descValue = data['weather'][0]['description'];

            nombre.innerHTML = nomValue;
            desc.innerHTML = descValue;
            temp.innerHTML = temperaturaCelcius.toFixed() + ' Grades Celcius';
        })
        
    })
    .catch(err => alert("wrong city name"));

   

}
