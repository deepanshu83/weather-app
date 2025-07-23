const apiKey = "";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weatherimg");

async function checkWeather(city){
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp h1").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds" ){
         weathericon.src = "images/clouds.png"
    }
    else if(data.weather[0].main == "Clear" ){
         weathericon.src = "images/clear.png"
    }
    else if(data.weather[0].main == "Drizzle" ){
         weathericon.src = "images/drizzle.png"
    }
    else if(data.weather[0].main == "Mist" ){
         weathericon.src = "images/mist.png"
    }
    else if(data.weather[0].main == "Rain" ){
         weathericon.src = "images/rain.png"
    }
    else if (data.weather[0].main == "Snow" ){
         weathericon.src = "images/snow.png"
    }
 
}

searchBtn.addEventListener("click" , ()=>{
    checkWeather(searchBox.value);
});
