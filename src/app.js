alert("Hello world");

function displayDate() {
  let date = new Date(timestamp);
  let hours = date.getHours;
  let minutes = date.getMinutes;
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function displayForecast() {
  let forecastElement = document.querySelector("#forecast");

  let forecastHTML = "";

  forecastHTML = `
  <div class="row">
            <div class="col-xl-6">
              <div class="icon">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                  alt="Clear"
                />
                </div>
             <div class="temperature"></div>
                12° <span class="celsius"><span class="celsius-link">C</span></span> | °<span class="fahrenheit"><span class="fahrenheit-link"><a href="">F</a></span></span>
              </div>
            </div>`;
  forecastElement.innerHTML = forecastHTML;
}

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let precipitationElement = document.querySelector("#precipitation");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let cityElement = document.querySelector("#city");
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
}
temperatureElement.innerHTML = Math.round(response.data.main.temp);
humidityElement.innerHTML = response.data.main.humidity;
precipitationElement.innerHTML = response.data.main.precipitation;
windElement.innerHTML = Math.round(response.data.main.wind.speed);
dateElement.innerHTML = formatDate(response.data.dt * 1000);

function search(city) {
  let apiKey = "63214c4281922e3bb72fdf12dada7734";
  let apiUrl =
    "https://api.openweathermap.org/data/3.0/onecall/timemachine?lat={lat}&lon={lon}&dt={time}&appid={apiKey}&units={metric}";
  axios.get(url).then(displayTemperature);
}

function handleSubmit(event) {
  event.preventDefault;
  let cityInputElement = document.querySelector("#city-input");
  console.log(cityInputElement.value);
  search(cityInputElement.value);
}

function displayFahrenheitTemp(event) {
  event.preventDefault();
  let fahrenheitElement = document.querySelector("#fahrenheit");
  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let fahrenheitTemp = (celsiusTemp * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheitTemp);
}

function displayCelsiusTemp(event) {
  event.preventDefault();
  celsiusLink.classList.radd("active");
  fahrenheitLink.classList.remove("active");
  let temperatureElement = document.querySelector("#celsius");
  temperatureElement.innerHTML = celsiusTemp;
}

let celsiusTemp = null;

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemp);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemp);
