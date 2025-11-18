import clearIcon from './assets/clear.png';
import rainIcon from './assets/rain.png';
import snowIcon from './assets/snow.png';
import cloudIcon from './assets/clouds.png';
import mistIcon from './assets/mist.png';
import drizzleIcon from './assets/drizzle.png';

export default function Icon({ weather }) {
    console.log("Weather in Icon:", weather);
    return (
        <>
        <div>
            {weather === "Clear" && <img src={clearIcon} alt="Clear" />}
            {weather === "Rain" && <img src={rainIcon} alt="Rain" />}
            {weather === "Snow" && <img src={snowIcon} alt="Snow" />}
            {weather === "Clouds" && <img src={cloudIcon} alt="Clouds" />}
            {weather === "Mist" && <img src={mistIcon} alt="Mist" />}
            {weather === "Drizzle" && <img src={drizzleIcon} alt="Drizzle" />}
        </div>
        </>
    );
}