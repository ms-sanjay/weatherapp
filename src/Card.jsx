import './Card.css';
import { useState } from 'react';
import Icon from './Icon.jsx';
import Search from './Search.jsx';
import dropletIcon from './assets/Drop water.json';
import windSpeedIcon from './assets/Weather Wind.json';
import Lottie from 'lottie-react';


export default function Card() {
    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState("");
    const [error, setError] = useState("");
    const [showWindIntro, setShowWindIntro] = useState(false);
    const [fade, setFade] = useState(false);

    const getWeather = async (event) => {
        event.preventDefault();

        setShowWindIntro(true);
        setTimeout(() => setFade(true), 1300);
        await new Promise(resolve => setTimeout(resolve, 1500));
        setShowWindIntro(false);
        setFade(false);

        if(!city) {
            setError("Please enter a city name");
            return;
        }
        
            try {
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bb6107c47a165a9df2a4ca4385be2817&units=metric`
                );

                const data = await response.json();

                if (data.cod === "404") {
                    setError("City not found");
                    setWeather(null);
                    return;
                }

                setWeather(data);
                setError("");
            } catch (err) {
                setError("Something went wrong. Try again!");
            }
    };

    return (
        
        <div className="Container">
            <Search show={showWindIntro} fade={fade} />
            <div className="Card">

                <div className="InputSection">
                    <form onSubmit={getWeather}>
                        <input
                            type="text"
                            placeholder="Enter City Name"
                            className="InputBox"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <button className="SearchButton"> 🔍 </button>
                    </form>

                    {error && <p className="Error">{error}</p>}
                </div>
                <div className="WeatherInfo">
                    <div className="WeatherIcon">
                            <Icon weather={weather?.weather?.[0]?.main} />
                            <h3 className="Temperature">{weather?.main.temp}°C</h3>
                        <h2 className="CityName">{weather?.name}</h2>
                    </div>

                    <div className="AdditionalInfo">
                            <div className="Humidity">
                                <Lottie animationData={dropletIcon} loop={true} className="HumidityIcon" />
                                <h3>
                                    Humidity <br/>{weather?.main.humidity}%
                                </h3>
                            </div>
                            <div className="WindSpeed">
                                <Lottie animationData={windSpeedIcon} loop={true} className='WindIcon'/>
                                <h3>
                                Wind Speed <br/>{weather?.wind.speed} m/s
                                </h3>
                            </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
