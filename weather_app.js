const input = document.querySelector('#location');
const weather_icon = document.querySelector("#weather_icon");
const weather_text = document.querySelector("#weather_text");
const temp = document.querySelector("#temp");
const humidity = document.querySelector("#hum");
const wind = document.querySelector("#win");
const search = document.querySelector("#search");


async function checkweather(x){
    const api_key = "e2bec2268c4e7ced754434d267736ea6"
;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${x}&appid=${api_key}`;
    const weather_data = await fetch(`${url}`).then(response=> response.json());
    console.log(weather_data);
}
search.addEventListener('click',()=>{
    checkweather(input.value);
});