const urlBase = `https://api.openweathermap.org/data/2.5/weather`
const API_KEY = '93c0297a131cf32847c0929e76b32aa1'
const diffKelvin = 273.15

document.getElementById('searchButton').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    if(city){
        //Llama a la api para que devuelva información del clima
        fetchWeather(city)
    }else{
        alert('Ingrese una ciudad válida')
    }
})

//Llamada a los datos del clima
function fetchWeather(city){
    fetch(`${urlBase}?q=${city}&appid=${API_KEY}&lang=es`)
    .then(data => data.json())
    .then(data => console.log(data))
}

function showWeatherData(data){
    const divResponseData = document.getElementById('responseData')
    divResponseData.innerHTML = ''

    const cityName = data.name //Chequeado en Postman donde recibe el City Name
    const countryName = data.sys.country //idem anterior, se encuentra dentro de sys como country
    const temp = data.main.temp
    const humidity = data.main.humidity
    const description = data.weather[0].description //Array que contiene varios climas por lo que accede al 0
    const icon = data.weather[0].icon //idem anterior
}