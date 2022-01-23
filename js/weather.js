const apiKey = "dd566a95d291cb02621765a1ed8dac19";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    fetch(url).then((response) => response.json()).then((data) => {
        const weather= document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        city.innerText = data.name;
        console.log(data)
        const currentWeather = data.weather[0].main
        if (currentWeather === 'Clear') {
            weather.insertAdjacentHTML("beforebegin",'<i class="far fa-sun fa-lg"></i>')
            weather.innerText = `${data.main.temp}`;  
        } else if (currentWeather === 'Clouds') {
            weather.insertAdjacentHTML("beforebegin",'<i class="fas fa-cloud fa-lg"></i>')
            weather.innerText = `${data.main.temp}`;
        } else {
            weather.innerText = `${currentWeather}/${data.main.temp}`;
        }
    })
}
function onGeoError() {
    alert("You live in wonder-land!");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);