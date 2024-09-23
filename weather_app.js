const input = document.querySelector('#location');
const weather_icon = document.querySelector("#weather_icon");
const weather_text = document.querySelector("#weather_text");
const temp = document.querySelector("#temp");
const humidity = document.querySelector("#hum");
const wind = document.querySelector("#win");
const search = document.querySelector("#search");


async function checkweather(x){
    const api_key = "e2bec2268c4e7ced754434d267736ea6";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${x}&appid=${api_key}`;
    const weather_data = await fetch(`${url}`).then(response=> response.json());
    console.log(weather_data);
    let t = weather_data.main.temp - 273;
    temp.innerHTML = t.toFixed(1) + "°C";
    let a = weather_data.weather[0].description
    weather_text.innerHTML = a;
    humidity.innerHTML = weather_data.main.humidity + "%";
    wind.innerHTML = weather_data.wind.speed + "Km/h";
    weather_icon.src= icon(a);
    document.querySelector("#city").innerHTML= x;
    
}
function icon(i){
    switch (i){
    case "clear sky":
        return "sunny.png";
        break;
    case "few clouds":
        return "partial.png";
        break;
    case "scattered clouds":
        return "cloudy.png";
        break;
    case "broken clouds":
        return "cloudy.png";
        break;
    case "shower rain":
        return "rainy.png";
        break;
    case "rain":
        return "rainy.png";
        break;
    case "thunderstorm":
        return "thunder.png";
        break;
    case "snow":
        return "snow.png";
        break;
    case "mist":
        return "humid.png";
        break;
    case "overcast clouds":
        return "cloudy.png";
        break;
    case "light rain":
        return "rainy.png";
        break;
    }
        
}
search.addEventListener('click',()=>{
    checkweather(input.value);
});