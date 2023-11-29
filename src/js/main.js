import '../scss/style.scss';

// API call
let queryUrl = "https://api.openweathermap.org/data/2.5/onecall?";
let lat = "lat=52.229676&";
let lon = "lon=21.012229&";
let apiOptions = "units=metric&exclude=minutely,alerts&";
let apiKey = "appid=dbb76c5d98d5dbafcb94441c6a10236e";
let file = queryUrl + lat + lon + apiOptions + apiKey;

fetch(file)
.then((response) => response.json())
.then((data) => {
    console.log(data);
    // Weather main data
    let main = data.current.weather[0].main;
    let description = data.current.weather[0].description;
    let temp = Math.round(data.current.temp);
    let pressure = data.current.pressure;
    let humidity = data.current.humidity;
    let name = "Warsaw";

    document.getElementById("wrapper-description").innerHTML = description;
    document.getElementById("wrapper-temp").innerHTML = temp + "°C";
    document.getElementById("wrapper-pressure").innerHTML = pressure;
    document.getElementById("wrapper-humidity").innerHTML = humidity + "°C";
    document.getElementById("wrapper-name").innerHTML = name;

    // Weather hourly data
    let hourNow = data.hourly[0].temp;
    let hour1 = data.hourly[1].temp;
    let hour2 = data.hourly[2].temp;
    let hour3 = data.hourly[3].temp;
    let hour4 = data.hourly[4].temp;
    let hour5 = data.hourly[5].temp;

    document.getElementById("wrapper-hour-now").innerHTML = hourNow + "°";
    document.getElementById("wrapper-hour1").innerHTML = hour1 + "°";
    document.getElementById("wrapper-hour2").innerHTML = hour2 + "°";
    document.getElementById("wrapper-hour3").innerHTML = hour3 + "°";
    document.getElementById("wrapper-hour4").innerHTML = hour4 + "°";
    document.getElementById("wrapper-hour5").innerHTML = hour5 + "°";


    //Time
    function addHours(hours) {
        let date = new Date();
        date.setMilliseconds(hours * 60 * 60 * 1000);
        return date.getHours();
    }
    
    let time1 = addHours(1);
    let time2 = addHours(2);
    let time3 = addHours(3);
    let time4 = addHours(4);
    let time5 = addHours(5);

    document.getElementById("wrapper-time1").innerHTML = time1;
    document.getElementById("wrapper-time2").innerHTML = time2;
    document.getElementById("wrapper-time3").innerHTML = time3;
    document.getElementById("wrapper-time4").innerHTML = time4;
    document.getElementById("wrapper-time5").innerHTML = time5;

    // Weather daily data
    let tomorrowTemp = Math.round(data.daily[0].temp.day);
    let dATTemp = Math.round(data.daily[1].temp.day);
    let tomorrowMain = data.daily[0].weather[0].main;
    let dATTempMain = data.daily[1].weather[0].main;

    document.getElementById("wrapper-forecast-temp-today").innerHTML =
    temp + "°";
    document.getElementById("wrapper-forecast-temp-tomorrow").innerHTML =
    tomorrowTemp + "°";
    document.getElementById("wrapper-forecast-temp-dAT").innerHTML =
    dATTemp + "°";


});