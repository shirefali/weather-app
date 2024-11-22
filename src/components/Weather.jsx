import './Weather.css';
import searchIcon from '../assets/search.png';
import clearImg from '../assets/clear.png';
import cloudImg from '../assets/cloud.png';
import drizzleImg from '../assets/drizzle.png';
import humidityImg from '../assets/humidity.png';
import rainImg from '../assets/rain.png';
import snowImg from '../assets/snow.png';
import windImg from '../assets/wind.png';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { RotatingLines } from 'react-loader-spinner';

const Weather = () => {
    const [weatherData, setWeatherData] = useState(false);
    const [city, setCity] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const API_KEY = 'dce0aaa212f61abc2be26bb7138ff197';

    const allIcons = {
        '01d': clearImg,
        '01n': clearImg,
        '02d': cloudImg,
        '02n': cloudImg,
        '03d': cloudImg,
        '03n': cloudImg,
        '04d': drizzleImg,
        '04n': drizzleImg,
        '09d': rainImg,
        '09n': rainImg,
        '10d': rainImg,
        '10n': rainImg,
        '13d': snowImg,
        '13n': snowImg,
    };

    const search = async (city) => {
        if (city === '') {
            toast.error('Enter The City Name');
            return;
        }

        setIsLoading(true);
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
            const res = await fetch(url);
            const data = await res.json();

            if (!res.ok) {
                const errorMessage =
                    res.status === 404
                        ? 'City not found'
                        : 'Something went wrong, please try again';
                toast.error(errorMessage);
                setWeatherData(false);
                return;
            }

            const icon = allIcons[data.weather[0].icon] || clearImg;

            setWeatherData({
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                temprature: Math.floor(data.main.temp),
                location: data.name,
                icon: icon,
            });
            setIsLoading(false);
        } catch (error) {
            toast.error(error.message);
            console.log(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (city) {
            search(city);
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setCity('');
    };

    return (
        <section className="weather-container">
            <form className="search-bar" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter The City Name"
                    className="search-input"
                    name="search"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button
                    type="submit"
                    className="search-btn"
                    onClick={() => search(city)}
                >
                    <img src={searchIcon} alt="search icon" />
                </button>
            </form>

            <img
                src={weatherData.icon || cloudImg}
                alt="weather icon"
                className="weather-icon"
            />
            {isLoading && (
                <RotatingLines
                    className="loader"
                    strokeColor="white"
                    height={50}
                    width={50}
                />
            )}
            <p className="temprature">{weatherData.temprature || 0}°c</p>
            <p className="city">{weatherData.location || 'City'}</p>
            <div className="weather-data">
                <div className="col">
                    <img src={humidityImg} alt="wind-image" />
                    <div>
                        <p>{weatherData.humidity || 0} %</p>
                        <span>Humidity</span>
                    </div>
                </div>
                <div className="col">
                    <img src={windImg} alt="wind-image" />
                    <div>
                        <p>{weatherData.windSpeed || 0} Km/h</p>
                        <span>Wind Speed</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Weather;
