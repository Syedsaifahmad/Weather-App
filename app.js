const apiKey = "691d7bd267353398955d1112a28574a5";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather-icon").style.display = "none";
    document.querySelector(".temp").style.display = "none";
    document.querySelector(".city").style.display = "none";
    document.querySelector(".last").style.display = "none";
  } else {
    var data = await response.json();

    document.querySelector(".city-p").innerHTML = data.name;
    document.querySelector(".temp-p").innerHTML =
      Math.round(data.main.temp) + "&deg;c";
    document.querySelector(".humidity-p").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind-p").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "mist.png";
    }

    document.querySelector(".weather-icon").style.display = "block";
    document.querySelector(".temp").style.display = "flex";
    document.querySelector(".city").style.display = "flex";
    document.querySelector(".last").style.display = "flex";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
