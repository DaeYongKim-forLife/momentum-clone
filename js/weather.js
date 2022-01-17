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
        weather.innerText = `${data.weather[0].main}/${data.main.temp}`;
    })
}
function onGeoError() {
    alert("Oh no!0");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);