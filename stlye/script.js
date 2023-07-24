const apiKey = 'd1c0432d4c586106cf168af0da76e10c'; // Replace 'YOUR_API_KEY' with your actual API key
const form = document.getElementById('city-form');
const cityInput = document.getElementById('city-input');
const currentWeatherContainer = document.getElementById('current-weather');
const forecastContainer = document.getElementById('forecast');
const searchHistoryContainer = document.getElementById('search-history');
const searchHistory = [];

//  fetch weather data from the API
function fetchWeatherData(cityName) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      displayCurrentWeather(data);
      fetchForecastData(data.coord);
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
    });
}

// Function to fetch 5-day forecast data from the API
function fetchForecastData(coord) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${coord.lat}&lon=${coord.lon}&appid=${apiKey}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      displayForecast(data);
    })
    .catch(error => {
      console.error('Error fetching forecast data:', error);
    });
}

// Function to display current weather data on the dashboard
function displayCurrentWeather(data) {
  // Update the currentWeatherContainer with the data
}

//  display 5-day forecast on the dashboard
function displayForecast(data) {
  
}

// update the search history section
function updateSearchHistory(cityName) {
  searchHistory.push(cityName);
  // Update the searchHistoryContainer with the latest search history
}

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault();
  const cityName = cityInput.value.trim();

  if (cityName !== '') {
    fetchWeatherData(cityName);
    updateSearchHistory(cityName);
    cityInput.value = '';
  }
}

 search history click
function handleSearchHistoryClick(event) {
  if (event.target.tagName === 'BUTTON') {
    const cityName = event.target.textContent;
    fetchWeatherData(cityName);
  }
}

// Add event listeners
form.addEventListener('submit', handleSubmit);
searchHistoryContainer.addEventListener('click', handleSearchHistoryClick);
