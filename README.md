### features

City Search: Users can search for weather information by entering the city name in the search bar.
Real-Time Data: Displays real-time weather data fetched from the OpenWeatherMap API.
Weather Icons: Custom icons for different weather conditions.
Error Handling: Alerts users with meaningful messages in case of errors (e.g., city not found, API issues).
Loading Indicator: Displays a spinner while fetching data from the API.
Responsive Design: The Weather App is fully responsive, ensuring a seamless experience across all devices, including desktops, tablets, and mobile phones. The layout adjusts dynamically to different screen sizes for better usability.

### what I used

React.js: For building the user interface.
CSS: For styling the components.
React-Toastify: For displaying error and success messages.
React Loader Spinner: For showing a loading animation.
OpenWeatherMap API: For fetching weather data.

### GOOGLE FONTS

I used google fonts to get cairo font to my project

### Weather Component

I create weather component to get it in app component to seperate the code and be more readable

### Css

I use css in my project to good style in my website

### OPEN WEATHER API

I get the api of weather from open weather api website
here is the link https://openweathermap.org/api

### responsive design

The application is designed to be fully responsive by:
Using flexible layouts and CSS media queries.
Ensuring that the search bar, weather data, and icons adapt to different screen sizes.
Providing a user-friendly experience on both small and large devices.

### useEffect

The useEffect hook is used to perform side effects, such as triggering the API call when the city value changes.

Purpose: Automatically fetch weather data when the city value is updated.
Implementation

### use state

The useState hook is used to manage the state of the following variables:

weatherData:

Purpose: Stores the weather data fetched from the API, including temperature, humidity, wind speed, and weather icon.
Initial Value: false (indicating no data is available initially).

city:

Purpose: Holds the name of the city entered by the user in the search bar.
Initial Value: An empty string ''.

isLoading:

Purpose: Tracks whether the app is currently fetching data from the API.
Initial Value: false.

### How it works

Search Feature:
Users input a city name.
When the search button is clicked, the search function is called.
API Call:
The app sends a GET request to the OpenWeatherMap API with the city name and API key.
On successful response, the weather data is extracted and stored in the component state.
State Management:
The useState hook manages city input, loading state, and weather data.
Error Handling:
If the city is not found or an error occurs, the app uses React-Toastify to display error messages.
Responsive Icons:
Weather conditions are visually represented using custom icons mapped from the API response.
